import { Test, TestingModule } from '@nestjs/testing';
import { ClassificationResolver } from './grid.resolver';

describe('ClassificationResolver', () => {
  let resolver: ClassificationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassificationResolver],
    }).compile();

    resolver = module.get<ClassificationResolver>(ClassificationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
