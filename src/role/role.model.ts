import { Column, Model, Table } from 'sequelize-typescript';
import { IRole } from 'src/common/interfaces/role.interface';

@Table
export class Role extends Model<IRole> {
  @Column
  name: string;
}
