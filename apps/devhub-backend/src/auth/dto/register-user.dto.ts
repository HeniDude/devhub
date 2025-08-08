import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserRole } from '@prisma/client';

export class RegisterUserDto {
  @IsNotEmpty()
  @IsString()
  login: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEnum(UserRole, { message: 'role must be STUDENT or MENTOR' })
  role: UserRole;
}
