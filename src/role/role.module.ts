import { Global, Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { roleProviders } from './role.providers';
import { RoleController } from './role.controller';

@Global()
@Module({
  imports: [RoleModule],
  controllers: [RoleController],
  providers: [RoleService, ...roleProviders],
  exports: [RoleService],
})
export class RoleModule {}
