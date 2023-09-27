import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateElistOfferInput } from '../../inputs/update-elist-offer.input';
import { ElistOfferUpdatedEvent } from './elist-offer-updated.event';
import { ElistOfferUpdatedHandler } from './elist-offer-updated.handler';

describe('ElistOfferUpdatedHandler', () => {
  let handler: ElistOfferUpdatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { elistOffer: { update: jest.fn() } };
    handler = new ElistOfferUpdatedHandler(mockPrismaService);
  });

  it('should handle ElistOfferUpdatedEvent correctly', async () => {
    // Mock the data for UpdateElistOfferInput and Metadata
    const mockUpdateElistOfferInput: UpdateElistOfferInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      elist_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      is_accepted: true,
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new ElistOfferUpdatedEvent(mockUpdateElistOfferInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.elist-offer.create was called correctly
    const expectedCreateObj = {
      data: {
        elist: {
          connect: {
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          },
        },
        is_accepted: true,
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: mockUpdateElistOfferInput.id,
      },
    };

    expect(mockPrismaService.elistOffer.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
