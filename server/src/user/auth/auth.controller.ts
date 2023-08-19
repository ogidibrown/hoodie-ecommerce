import { Controller, Body, Param, Post } from '@nestjs/common';

import { CreateUserDto, LoginUserDto } from '../dto/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    return this.authService.createAcct(body);
  }

  @Post('/signin')
  loginUser(@Body() body: LoginUserDto) {
    return this.authService.loginUserAcct(body);
  }
}
