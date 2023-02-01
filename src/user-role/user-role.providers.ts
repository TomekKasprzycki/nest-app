import { userRole } from 'src/common/translations/translation';
import { UserRole } from './user-role.model';

export const userRoleProviders = [
  {
    provide: userRole.REPO,
    useValue: UserRole,
  },
];
