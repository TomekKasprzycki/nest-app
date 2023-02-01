import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/db.module';
import { RoleModule } from 'src/role/role.module';
import { UserRoleModule } from 'src/user-role/user-role.module';
import { UserDto } from './dto';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule, RoleModule, UserRoleModule],
  controllers: [UserController],
  providers: [UserService, UserDto, ...userProviders],
  exports: [UserService, UserDto],
})
export class UserModule {}
