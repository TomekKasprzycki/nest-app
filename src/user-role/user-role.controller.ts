import { Body, Controller, Post } from '@nestjs/common';
import { Role } from 'src/role/role.model';
import { User } from 'src/user/user.model';

@Controller('user-role')
export class UserRoleControllers {
  @Post()
  addRole(@Body() somebody) {}
}
