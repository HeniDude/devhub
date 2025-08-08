import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @IsString()
  login: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
