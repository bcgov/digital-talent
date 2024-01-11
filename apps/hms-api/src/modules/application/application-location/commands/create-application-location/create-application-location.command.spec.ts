import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateApplicationLocationInput } from '../../inputs/create-application-location.input';
import { CreateApplicationLocationCommand } from './create-application-location.command';

describe('CreateApplicationLocationCommand', () => {
  const mockData: CreateApplicationLocationInput = {
    application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    rank: 1,
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new CreateApplicationLocationCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "CreateApplicationLocationCommand"', () => {
    const command = new CreateApplicationLocationCommand(mockData, mockMetadata);

    expect(command.type).toBe('CreateApplicationLocationCommand');
  });
});
