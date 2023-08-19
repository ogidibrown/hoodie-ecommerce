import { IsString, IsEmail } from 'class-validator';

export class UserDto {
  @IsString()
  password: string;
  @IsEmail()
  email: string;
}
