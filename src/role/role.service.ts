import { Inject, Injectable } from '@nestjs/common';
import { IRole } from 'src/common/interfaces/role.interface';
import { role } from 'src/common/translations/translation';
import { User } from 'src/user/user.model';
import { Role } from './role.model';

@Injectable()
export class RoleService {
  constructor(
    @Inject(role.REPO)
    private roleRepository: typeof Role
  ) {}

  getRoleNames = async (): Promise<string[]> => {
    return (await this.roleRepository.findAll()).map((role) => role.name);
  };

  getRoles = async () => {
    return await this.roleRepository.findAll();
  };

  getRole = async (name: string) => {
    return await this.roleRepository.findOne({ where: { name } });
  };

  getUserRoles = async (UserId: number) => {
    return await this.roleRepository.findAll({ where: { id: UserId }, include: User });
  };

  createRole = async (role: IRole): Promise<Role> => {
    return await this.roleRepository.create({ name: role.name });
  };

  updateRole = async (role: Role) => {
    return await this.roleRepository.update(
      { name: role.name },
      {
        where: {
          id: role.id,
        },
      }
    );
  };

  deleteRole = async (id: number) => {
    return await this.roleRepository.destroy({ where: { id } });
  };
}
