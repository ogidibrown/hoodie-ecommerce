import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { PrismaService } from 'src/prisma/prisma.service';
interface CreateUserData {
  name: string;
  email: string;
  password: string;
}
interface LoginUserData {
  email: string;
  password: string;
}
@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async createAcct({ name, email, password }: CreateUserData) {
    //check email
    const emailExist = await this.prismaService.user.findUnique({
      where: { email },
    });
    if (emailExist)
      throw new BadRequestException(
        'email already exist, use another or login  instead',
      );

    //hash password
    const hashPassword = await bcrypt.hash(password, 12);

    // create token
    const user = await this.prismaService.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JSON_SECRET,
    );
    return { user, token };
  }

  async loginUserAcct({ email, password }: LoginUserData) {
    //check email
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new NotFoundException('user does not exist');
    }
    //compare password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      throw new BadRequestException('Incorrect password,please try again');
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JSON_SECRET,
    );
    return { user, token };
  }
}
