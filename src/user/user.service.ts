import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { IUser } from 'src/common/interfaces/user.interface';
import { IUserDto } from 'src/common/interfaces/userDto.interface';
import { role, user, userRole } from 'src/common/translations/translation';
import { Role } from 'src/role/role.model';
import { RoleService } from 'src/role/role.service';
import { UserRoleService } from 'src/user-role/user-role.service';
import { UserDto } from './dto';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @Inject(user.REPO)
    private userRepository: typeof User,
    private roleService: RoleService,
    @Inject(forwardRef(() => UserRoleService))
    private userRoleService: UserRoleService,
    private userDto: UserDto
  ) {}

  create = async (user: IUser): Promise<boolean> => {
    let role;
    let savedUser;
    try {
      role = await this.roleService.getRole('ROLE_USER');
    } catch (err) {
      throw new Error('Błąd');
    }
    try {
      savedUser = await this.userRepository.create<User>(user);
    } catch (err) {
      throw new Error('Błąd');
    }
    try {
      await this.userRoleService.addRole(savedUser, role);
    } catch (err) {
      throw new Error('Błąd');
    }
    return true;
  };

  findOne = async (login: string) => {
    return await this.userRepository.findOne({ where: { login }, include: [Role] });
  };

  findAll = async (): Promise<User[]> => {
    return await this.userRepository.findAll<User>();
  };

  findById = async (id: number): Promise<IUserDto> => {
    const user = await this.userRepository.findByPk(id, { include: Role });
    const userDto = this.userDto.convertToDto(user);

    return userDto;
  };
}
