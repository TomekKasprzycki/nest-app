import { Controller, Get } from '@nestjs/common';
import { Param, UseGuards } from '@nestjs/common/decorators';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { IUser } from 'src/common/interfaces/user.interface';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user: IUser) {
    return user;
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.userService.findById(id);
  }
}
