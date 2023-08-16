import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationSkillResolver } from './application-skill.resolver';

describe('ApplicationSkillResolver', () => {
  let resolver: ApplicationSkillResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicationSkillResolver],
    }).compile();

    resolver = module.get<ApplicationSkillResolver>(ApplicationSkillResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
