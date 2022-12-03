import { Body, Controller, Post } from '@nestjs/common';
import { CreateUser } from './dtos/create-user.dto';

@Controller('auth')
export class UserController {
  @Post('/signup')
  createUser(@Body() createUser: CreateUser) {
    console.log(createUser);
  }
}
