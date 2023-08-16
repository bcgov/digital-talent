import { Test, TestingModule } from '@nestjs/testing';
import { ElistResolver } from './elist.resolver';

describe('ElistResolver', () => {
  let resolver: ElistResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElistResolver],
    }).compile();

    resolver = module.get<ElistResolver>(ElistResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
