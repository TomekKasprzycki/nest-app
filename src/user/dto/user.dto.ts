import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { IUserDto } from 'src/common/interfaces/userDtoInterface';
import { User } from '../user.model';

export class UserDto {
  constructor() {}

  convertToDto = (user: User) => {
    const dto: IUserDto = {
      id: user.id,
      email: user.login,
      name: user.name,
      createdAt: user.createdAt,
    };
    return dto;
  };
}
