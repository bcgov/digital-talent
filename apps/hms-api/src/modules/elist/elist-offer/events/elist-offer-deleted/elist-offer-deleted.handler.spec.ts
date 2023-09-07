import { ElistOfferDeletedEvent } from './elist-offer-deleted.event';
import { ElistOfferDeletedHandler } from './elist-offer-deleted.handler';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteElistOfferInput } from '../../inputs/delete-elist-offer.input';

describe('ElistOfferDeletedHandler', () => {
  let handler: ElistOfferDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { elistOffer: { update: jest.fn() } };
    handler = new ElistOfferDeletedHandler(mockPrismaService);
  });

  it('should handle ElistOfferDeletedEvent correctly', async () => {
    // Mock the data for DeleteElistOfferInput and Metadata
    const mockDeleteElistOfferInput: DeleteElistOfferInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new ElistOfferDeletedEvent(mockDeleteElistOfferInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.elist-offer.create was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: {
        id: mockDeleteElistOfferInput.id,
      },
    };

    expect(mockPrismaService.elistOffer.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
