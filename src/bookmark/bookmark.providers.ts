import { bookmark } from 'src/common/translations/translation';
import { Bookmark } from './bookmark.model';

export const bookmarkProviders = [
  {
    provide: bookmark.REPO,
    useValue: Bookmark,
  },
];
