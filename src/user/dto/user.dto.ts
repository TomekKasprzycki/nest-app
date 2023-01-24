import { IUserDto } from 'common/interfaces/userDtoInterface';
import { User } from 'user/user.model';

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
