import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationLocationResolver } from './application-location.resolver';

describe('ApplicationLocationResolver', () => {
  let resolver: ApplicationLocationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicationLocationResolver],
    }).compile();

    resolver = module.get<ApplicationLocationResolver>(ApplicationLocationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
