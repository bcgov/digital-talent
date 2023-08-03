import { Test, TestingModule } from '@nestjs/testing';
import { CompetitionCommandResolver } from './competition-command.resolver';

describe('CompetitionCommandResolver', () => {
  let resolver: CompetitionCommandResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompetitionCommandResolver],
    }).compile();

    resolver = module.get<CompetitionCommandResolver>(CompetitionCommandResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
