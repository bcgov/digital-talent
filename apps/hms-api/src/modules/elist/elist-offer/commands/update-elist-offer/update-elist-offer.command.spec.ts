import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateElistOfferInput } from '../../inputs/update-elist-offer.input';
import { UpdateElistOfferCommand } from './update-elist-offer.command';

describe('UpdateElistOfferCommand', () => {
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
    const command = new UpdateElistOfferCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "UpdateElistOfferCommand"', () => {
    const command = new UpdateElistOfferCommand(mockData, mockMetadata);

    expect(command.type).toBe('UpdateElistOfferCommand');
  });
});
