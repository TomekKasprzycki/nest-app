import { Injectable } from '@nestjs/common';
import { IUserDto } from 'src/common/interfaces/userDto.interface';
import { User } from 'src/user/user.model';

@Injectable()
export class UserDto {
  constructor() {}

  convertToDto = (user: User) => {
    const dto: IUserDto = {
      id: user.id,
      email: user.login,
      name: user.name,
      roles: user.dataValues.Roles.map((role) => role.dataValues.name),
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    return dto;
  };
}
