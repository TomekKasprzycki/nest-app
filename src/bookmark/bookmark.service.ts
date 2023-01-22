import { Inject, Injectable } from '@nestjs/common';
import { bookmark } from 'src/common/translations/translation';
import { Bookmark } from './bookmark.model'; 

@Injectable()
export class BookmarkService {
    constructor(
        @Inject(bookmark.REPO)
        private bookmarkRepository: typeof Bookmark
    ){}

   findAll = async (): Promise<Bookmark[]> => {
    return this.bookmarkRepository.findAll<Bookmark>()
   }
}
