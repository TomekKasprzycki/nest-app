import { Inject, Injectable } from '@nestjs/common';
import { userRole } from 'src/common/translations/translation';
import { Role } from 'src/role/role.model';
import { User } from 'src/user/user.model';
import { UserRole } from './user-role.model';

@Injectable()
export class UserRoleService {
  constructor(@Inject(userRole.REPO) private userRoleRepository: typeof UserRole) {}

  addRole = async (user: User, role: Role) => {
    return await this.userRoleRepository.create({ UserId: user.id, RoleId: role.id });
  };
}
