import { Role } from 'src/role/role.model';

export interface IUser {
  id: number;
  name: string;
  login: string;
  password: string;
  Roles: Role[];
}
