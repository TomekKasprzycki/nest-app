import { Table, Column, Model, Unique } from 'sequelize-typescript';
import { IUser } from 'common/interfaces/userInterface';

@Table
export class User extends Model<IUser> {
  @Column
  name: string;
  @Unique
  @Column
  login: string;
  @Column
  password: string;
}
