import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({ example: 'username', description: 'Login пользователя' })
  @IsNotEmpty()
  @IsString()
  login: string;

  @ApiProperty({ example: 'strongPassword123', description: 'Пароль пользователя' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
