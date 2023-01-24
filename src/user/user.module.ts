import { Module } from '@nestjs/common';
import { DatabaseModule } from 'db/db.module';
import { UserDto } from './dto';
import { UserController } from './user.controller';
import { userProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, UserDto, ...userProviders],
  exports: [UserService, UserDto],
})
export class UserModule {}
