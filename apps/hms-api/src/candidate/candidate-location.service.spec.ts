import { Test, TestingModule } from '@nestjs/testing';
import { CandidateLocationService } from './candidate-location.service';

describe('CandidateLocationService', () => {
  let service: CandidateLocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CandidateLocationService],
    }).compile();

    service = module.get<CandidateLocationService>(CandidateLocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
