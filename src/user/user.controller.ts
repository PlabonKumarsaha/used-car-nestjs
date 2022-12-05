import { Body, Controller, Get, Post, Param, Query } from '@nestjs/common';
import { CreateUser } from './dtos/create-user.dto';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/signup')
  createUser(@Body() createUser: CreateUser) {
    this.userService.create(createUser.email, createUser.password);
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id));
  }

  @Get()
  findAllUser(@Query('email') email: string) {
    return this.userService.find(email);
  }
}
