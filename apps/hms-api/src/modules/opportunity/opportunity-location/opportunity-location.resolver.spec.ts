import { Test, TestingModule } from '@nestjs/testing';
import { OpportunityLocationResolver } from './opportunity-location.resolver';

describe('OpportunityLocationResolver', () => {
  let resolver: OpportunityLocationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpportunityLocationResolver],
    }).compile();

    resolver = module.get<OpportunityLocationResolver>(OpportunityLocationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
