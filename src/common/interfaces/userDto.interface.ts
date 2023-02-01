import { Role } from 'src/role/role.model';

export interface IUserDto {
  id: number;
  email: string;
  name: string;
  roles: string[];
  createdAt: Date;
  updatedAt: Date;
}
