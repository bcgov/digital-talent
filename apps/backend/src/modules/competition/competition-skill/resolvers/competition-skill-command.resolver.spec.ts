import { Test, TestingModule } from '@nestjs/testing';
import { CompetitionSkillCommandResolver } from './competition-skill-command.resolver';

describe('CompetitionSkillCommandResolver', () => {
  let resolver: CompetitionSkillCommandResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompetitionSkillCommandResolver],
    }).compile();

    resolver = module.get<CompetitionSkillCommandResolver>(CompetitionSkillCommandResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
