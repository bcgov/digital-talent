import { Test, TestingModule } from '@nestjs/testing';
import { SkillResolver } from './skill.resolver';

describe('SkillResolver', () => {
  let resolver: SkillResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SkillResolver],
    }).compile();

    resolver = module.get<SkillResolver>(SkillResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
