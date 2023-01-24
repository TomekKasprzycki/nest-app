import { Controller, Get } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtGuard } from 'auth/guard';
import { GetUser } from 'auth/decorator';
import { IUser } from 'common/interfaces/userInterface';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: IUser) {
    return user;
  }
}
