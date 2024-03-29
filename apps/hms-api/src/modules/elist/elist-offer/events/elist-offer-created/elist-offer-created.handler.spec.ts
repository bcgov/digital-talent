import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateElistOfferInput } from '../../inputs/create-elist-offer.input';
import { ElistOfferCreatedEvent } from './elist-offer-created.event';
import { ElistOfferCreatedHandler } from './elist-offer-created.handler';

describe('ElistOfferCreatedHandler', () => {
  let handler: ElistOfferCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { elistOffer: { create: jest.fn() } };
    handler = new ElistOfferCreatedHandler(mockPrismaService);
  });

  it('should handle ElistOfferCreatedEvent correctly', async () => {
    // Mock the data for CreateElistOfferInput and Metadata
    const mockCreateElistOfferInput: CreateElistOfferInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      elist_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      opportunity_id: 'c04d525a-9192-4e77-8b64-9cca3dd72ea7',
      is_accepted: true,
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new ElistOfferCreatedEvent(mockCreateElistOfferInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.elist-offer.create was called correctly
    const expectedCreateObj = {
      data: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        elist: {
          connect: {
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          },
        },
        opportunity: {
          connect: {
            id: 'c04d525a-9192-4e77-8b64-9cca3dd72ea7',
          },
        },
        is_accepted: true,
        created_at: mockMetadata.created_at,
      },
    };

    expect(mockPrismaService.elistOffer.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
