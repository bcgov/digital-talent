import { Test, TestingModule } from '@nestjs/testing';
import { CompetitionScheduleResolver } from './competition-schedule.resolver';

describe('CompetitionScheduleResolver', () => {
  let resolver: CompetitionScheduleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompetitionScheduleResolver],
    }).compile();

    resolver = module.get<CompetitionScheduleResolver>(CompetitionScheduleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
