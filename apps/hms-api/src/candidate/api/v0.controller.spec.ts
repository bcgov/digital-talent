import { Test, TestingModule } from '@nestjs/testing';
import { CandidateService } from '../candidate.service';
import { CandidateApiV0Controller } from './v0.controller';

describe('CandidateController', () => {
  let controller: CandidateApiV0Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandidateApiV0Controller],
      providers: [CandidateService],
    }).compile();

    controller = module.get<CandidateApiV0Controller>(CandidateApiV0Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
