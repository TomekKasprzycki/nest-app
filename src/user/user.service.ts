import { Inject, Injectable } from '@nestjs/common';
import { where } from 'sequelize';
import { IUser } from 'src/common/interfaces/userInterface';
import { user } from 'src/common/translations/translation';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @Inject(user.REPO)
    private userRepository: typeof User
  ) {}

  create = async (user: IUser): Promise<User> => {
    return this.userRepository.create<User>(user);
  };

  findOne = async (login: string) => {
    return this.userRepository.findOne({ where: { login } });
  };

  findAll = async (): Promise<User[]> => {
    return this.userRepository.findAll<User>();
  };
}
