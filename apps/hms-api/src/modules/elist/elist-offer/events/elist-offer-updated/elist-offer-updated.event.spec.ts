import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateElistOfferInput } from '../../inputs/update-elist-offer.input';
import { ElistOfferUpdatedEvent } from './elist-offer-updated.event';

describe('ElistOfferUpdatedEvent', () => {
  const mockData: UpdateElistOfferInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    elist_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    is_accepted: true,
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new ElistOfferUpdatedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "ElistOfferUpdatedEvent"', () => {
    const event = new ElistOfferUpdatedEvent(mockData, mockMetadata);

    expect(event.type).toBe('ElistOfferUpdatedEvent');
  });
});
