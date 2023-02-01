import { Test, TestingModule } from '@nestjs/testing';
import { UserRoleControllers } from '../user-role.controller';

describe('UserRoleController', () => {
  let controller: UserRoleControllers;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRoleControllers],
    }).compile();

    controller = module.get<UserRoleControllers>(UserRoleControllers);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
