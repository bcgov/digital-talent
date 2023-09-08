import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateApplicationLocationInput } from '../../inputs/update-application-location.input';
import { UpdateApplicationLocationCommand } from './update-application-location.command';

describe('UpdateApplicationLocationCommand', () => {
  const mockData: UpdateApplicationLocationInput = {
    application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    rank: 3,
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new UpdateApplicationLocationCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "UpdateApplicationLocationCommand"', () => {
    const command = new UpdateApplicationLocationCommand(mockData, mockMetadata);

    expect(command.type).toBe('UpdateApplicationLocationCommand');
  });
});
