import { Table, Model, Column, PrimaryKey, AutoIncrement, DataType } from 'sequelize-typescript';

@Table
export class UserRole extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
}
