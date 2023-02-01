import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { BookmarkModule } from 'src/bookmark/bookmark.module';
import { DatabaseModule } from 'src/db/db.module';
import { ConfigModule } from '@nestjs/config';
import { RoleModule } from './role/role.module';
import { UserRoleModule } from './user-role/user-role.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    BookmarkModule,
    DatabaseModule,
    UserRoleModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RoleModule,
  ],
})
export class AppModule {}
