import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Query,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateUser } from './dtos/create-user.dto';
import { UpdateUser } from './dtos/update-user.dto';
import { UserService } from './user.service';
import { NotFoundException } from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common/decorators';
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';
@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/signup')
  createUser(@Body() createUser: CreateUser) {
    this.userService.create(createUser.email, createUser.password);
  }

  @UseInterceptors(SerializeInterceptor)
  @Get('/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.userService.findOne(parseInt(id));
    if (!user) {
      return new NotFoundException('User not found');
    } else {
      return user;
    }
  }

  @Get()
  findAllUser(@Query('email') email: string) {
    return this.userService.find(email);
  }
  @Delete('/:id')
  deleteUSer(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }

  @Patch()
  updateUser(@Param('id') id: string, @Body() updateUser: UpdateUser) {
    return this.userService.update(parseInt(id), updateUser);
  }
}
