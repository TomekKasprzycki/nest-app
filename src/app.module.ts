import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { DatabaseModule } from './db/db.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, DatabaseModule],
})
export class AppModule {}
