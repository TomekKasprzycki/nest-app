import { role } from 'src/common/translations/translation';
import { Role } from './role.model';

export const roleProviders = [
  {
    provide: role.REPO,
    useValue: Role,
  },
];
