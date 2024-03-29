import { CreateElistOfferCommand } from '../commands/create-elist-offer/create-elist-offer.command';
import { DeleteElistOfferCommand } from '../commands/delete-elist-offer/delete-elist-offer.command';
import { UpdateElistOfferCommand } from '../commands/update-elist-offer/update-elist-offer.command';
import { CreateElistOfferInput } from '../inputs/create-elist-offer.input';
import { UpdateElistOfferInput } from '../inputs/update-elist-offer.input';
import { ElistOfferResolver } from './elist-offer.resolver';

describe('ElistOfferResolver', () => {
  let resolver: ElistOfferResolver;
  let mockCommandBus: any;
  let mockQueryBus: any;

  beforeEach(() => {
    mockCommandBus = { execute: jest.fn() };
    mockQueryBus = { execute: jest.fn() };
    resolver = new ElistOfferResolver(mockCommandBus, mockQueryBus);
  });

  it('should create an elist-offer correctly', async () => {
    const input: CreateElistOfferInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      elist_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      opportunity_id: '40218e7e-ccf2-4a05-adbb-6037a7c150a9',
      is_accepted: true,
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.createElistOffer({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new CreateElistOfferCommand({ ...input }, { created_by: userId }),
      }),
    );
  });

  it('should update an elist-offer correctly', async () => {
    const input: UpdateElistOfferInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      elist_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      is_accepted: true,
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.updateElistOffer({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new UpdateElistOfferCommand(input, { created_by: userId }),
      }),
    );
  });

  it('should delete an elist-offer correctly', async () => {
    const appId = 'mockAppId';
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.deleteElistOffer({ id: userId } as any, appId);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new DeleteElistOfferCommand({ id: appId }, { created_by: userId }),
      }),
    );
  });

  it('should get all elist-offers correctly', async () => {
    const mockElistOffers = [{ id: '1' }, { id: '2' }];
    mockQueryBus.execute.mockResolvedValueOnce(mockElistOffers);

    const result = await resolver.elistOffers();

    expect(result).toEqual(mockElistOffers);
    expect(mockQueryBus.execute).toHaveBeenCalled();
  });

  it('should get a specific elist-offer by id correctly', async () => {
    const appId = 'mockAppId';
    const mockElistOffer = { id: appId };
    mockQueryBus.execute.mockResolvedValueOnce(mockElistOffer);

    const result = await resolver.elistOffer(appId);

    expect(result).toEqual(mockElistOffer);
    expect(mockQueryBus.execute).toHaveBeenCalledWith({ id: appId });
  });
});
