import { Table, Column, Model, Unique } from 'sequelize-typescript';
import { IUser } from 'src/common/interfaces/user.interface';
import { Role } from 'src/role/role.model';

@Table
export class User extends Model<IUser> {
  @Column
  name: string;
  @Unique
  @Column
  login: string;
  @Column
  password: string;
  roles: Role[];
}
