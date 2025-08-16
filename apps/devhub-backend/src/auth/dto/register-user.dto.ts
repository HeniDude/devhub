import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserRole } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  @ApiProperty({ example: 'username', description: 'Login пользователя' })
  @IsNotEmpty()
  @IsString()
  login: string;

  @ApiProperty({ example: 'strongPassword123', description: 'Пароль пользователя' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'John', description: 'Имя пользователя' })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'Фамилия пользователя' })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({
    example: UserRole.STUDENT,
    enum: UserRole,
    description: 'Роль пользователя (STUDENT или MENTOR)',
  })
  @IsNotEmpty()
  @IsEnum(UserRole, { message: 'role must be STUDENT or MENTOR' })
  role: UserRole;
}
