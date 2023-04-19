import { Test, TestingModule } from '@nestjs/testing';
import { HiringManagerService } from './hiring-manager.service';

describe('HiringManagerService', () => {
  let service: HiringManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HiringManagerService],
    }).compile();

    service = module.get<HiringManagerService>(HiringManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
