import { Test, TestingModule } from '@nestjs/testing';
import { PicklistController } from './picklist.controller';

describe('PicklistController', () => {
  let controller: PicklistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PicklistController],
    }).compile();

    controller = module.get<PicklistController>(PicklistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
