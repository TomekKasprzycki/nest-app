import { Inject, Injectable } from '@nestjs/common';
import { IUser } from 'common/interfaces/userInterface';
import { user } from 'common/translations/translation';
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

  findById = async (id: number): Promise<User> => {
    return this.userRepository.findByPk(id);
  };
}
