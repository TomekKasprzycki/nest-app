import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/db.module';
import { UserRoleControllers } from './user-role.controller';
import { userRoleProviders } from './user-role.providers';
import { UserRoleService } from './user-role.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserRoleControllers],
  providers: [UserRoleService, ...userRoleProviders],
  exports: [UserRoleService],
})
export class UserRoleModule {}
