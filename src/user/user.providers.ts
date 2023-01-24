import { user } from 'common/translations/translation';
import { User } from './user.model';

export const userProviders = [
  {
    provide: user.REPO,
    useValue: User,
  },
];
