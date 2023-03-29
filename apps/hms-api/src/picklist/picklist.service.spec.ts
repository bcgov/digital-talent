import { Test, TestingModule } from '@nestjs/testing';
import { PicklistService } from './picklist.service';

describe('PicklistService', () => {
  let service: PicklistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PicklistService],
    }).compile();

    service = module.get<PicklistService>(PicklistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
