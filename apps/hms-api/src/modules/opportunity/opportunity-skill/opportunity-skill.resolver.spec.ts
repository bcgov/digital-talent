import { Test, TestingModule } from '@nestjs/testing';
import { OpportunitySkillResolver } from './opportunity-skill.resolver';

describe('OpportunitySkillResolver', () => {
  let resolver: OpportunitySkillResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpportunitySkillResolver],
    }).compile();

    resolver = module.get<OpportunitySkillResolver>(OpportunitySkillResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
