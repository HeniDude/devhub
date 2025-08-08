import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { generateToken } from './utils/generateToken.utils';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterUserDto) {
    const isLoginExist = await this.prisma.user.findUnique({
      where: {
        login: dto.login,
      },
    });

    if (isLoginExist) {
      throw new HttpException(
        `Пользователь с  логином: ${dto.login} уже существует`,
        HttpStatus.CONFLICT,
      );
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    await this.prisma.user.create({
      data: {
        login: dto.login,
        password: hashedPassword,
        firstName: dto.firstName,
        lastName: dto.lastName,
        role: dto.role,
      },
    });

    return {
      message: `Пользователь с логином: ${dto.login} создан`,
      date: new Date(),
    };
  }

  async login(dto: LoginUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        login: dto.login,
      },
    });

    if (!user) {
      throw new HttpException(
        `Пользователь с логином: ${dto.login} не найден`,
        HttpStatus.NOT_FOUND,
      );
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);

    if (!isPasswordValid) {
      throw new HttpException('Неверный логин или пароль', HttpStatus.UNAUTHORIZED);
    }

    const userForResponse = {
      id: user.id,
      login: user.login,
      role: user.role,
      firstName: user.firstName || undefined,
      lastName: user.lastName || undefined,
    };

    const token = generateToken(this.jwtService, userForResponse);

    return {
      user: userForResponse,
      message: `Вы успешно вошли в систему как ${user.login}`,
      date: new Date(),
      accessToken: token.accessToken,
    };
  }
}
