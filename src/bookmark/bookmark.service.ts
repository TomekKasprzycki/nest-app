import { Inject, Injectable } from '@nestjs/common';
import { IBookmark } from 'src/common/interfaces/bookmark.interface';
import { bookmark } from 'src/common/translations/translation';
import { Bookmark } from './bookmark.model';
import { responseErrors } from 'src/common/translations/translation';

@Injectable()
export class BookmarkService {
  constructor(
    @Inject(bookmark.REPO)
    private bookmarkRepository: typeof Bookmark
  ) {}

  create = async (bookmark: IBookmark): Promise<boolean> => {
    try {
      await this.bookmarkRepository.create(bookmark);
      return true;
    } catch (err) {
      throw new Error(responseErrors.UPS);
    }
  };

  findAll = async (): Promise<Bookmark[]> => {
    return this.bookmarkRepository.findAll<Bookmark>();
  };
}
