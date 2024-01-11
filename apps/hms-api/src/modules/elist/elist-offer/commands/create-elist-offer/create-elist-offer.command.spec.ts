import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateElistOfferInput } from '../../inputs/create-elist-offer.input';
import { CreateElistOfferCommand } from './create-elist-offer.command';

describe('CreateElistOfferCommand', () => {
  const mockData: CreateElistOfferInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    elist_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    opportunity_id: 'e90bec12-2490-4c44-8bf0-f2e9a8986a40',
    is_accepted: true,
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new CreateElistOfferCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "CreateElistOfferCommand"', () => {
    const command = new CreateElistOfferCommand(mockData, mockMetadata);

    expect(command.type).toBe('CreateElistOfferCommand');
  });
});
