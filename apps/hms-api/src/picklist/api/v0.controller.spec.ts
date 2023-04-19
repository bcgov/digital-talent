import { Test, TestingModule } from '@nestjs/testing';
import { PicklistService } from '../picklist.service';
import { PicklistApiV0Controller } from './v0.controller';

describe('PicklistApiV0Controller', () => {
  let controller: PicklistApiV0Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PicklistApiV0Controller],
      providers: [PicklistService],
    }).compile();

    controller = module.get<PicklistApiV0Controller>(PicklistApiV0Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
