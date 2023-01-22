import { Module } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { BookmarkController } from './bookmark.controller';
import { bookmarkProviders } from './bookmark.providers';

@Module({
  providers: [BookmarkService, ...bookmarkProviders],
  controllers: [BookmarkController],
  exports: [BookmarkService],
})
export class BookmarkModule {}
