import { Body, Controller, Get, Post } from '@nestjs/common';
import { IRole } from 'src/common/interfaces/role.interface';
import { RoleService } from './role.service';

@Controller('roles')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Get()
  getRoles() {
    return this.roleService.getRoles();
  }

  @Post()
  createRole(@Body() role: IRole) {
    return this.roleService.createRole(role);
  }
}
