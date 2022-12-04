import { Body, Controller, Post } from '@nestjs/common';
import { CreateUser } from './dtos/create-user.dto';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/signup')
  createUser(@Body() createUser: CreateUser) {
    this.userService.create(createUser.email, createUser.password);
  }
}
