import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from 'src/common/types/role.type';
import { IUserDto } from 'src/common/interfaces/userDto.interface';
import { ROLES_KEY } from '../decorator/decorator.roles';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const reqRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!reqRoles) return true;

    const { user } = context.switchToHttp().getRequest();

    const { roles } = user;

    let check = false;
    check = reqRoles.some((role) => roles.includes(role));

    return check;
  }
}
