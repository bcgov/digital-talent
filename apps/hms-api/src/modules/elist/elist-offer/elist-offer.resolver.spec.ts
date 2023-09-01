import { Test, TestingModule } from '@nestjs/testing';
import { ElistOfferResolver } from './elist-offer.resolver';

describe('ElistOfferResolver', () => {
  let resolver: ElistOfferResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElistOfferResolver],
    }).compile();

    resolver = module.get<ElistOfferResolver>(ElistOfferResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
