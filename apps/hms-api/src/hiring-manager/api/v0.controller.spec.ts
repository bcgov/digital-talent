import { Test, TestingModule } from '@nestjs/testing';
import { HiringManagerService } from '../hiring-manager.service';
import { HiringManagerApiV0Controller } from './v0.controller';

describe('HiringManagerApiV0Controller', () => {
  let controller: HiringManagerApiV0Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HiringManagerApiV0Controller],
      providers: [HiringManagerService],
    }).compile();

    controller = module.get<HiringManagerApiV0Controller>(HiringManagerApiV0Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
