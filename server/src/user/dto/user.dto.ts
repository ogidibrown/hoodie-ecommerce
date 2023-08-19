import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  password: string;
  @IsString()
  name: string;
  @IsEmail()
  email: string;
}

export class LoginUserDto {
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
