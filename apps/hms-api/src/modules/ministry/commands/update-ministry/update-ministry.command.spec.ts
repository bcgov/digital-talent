import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateMinistryInput } from '../../inputs/update-ministry.input';
import { UpdateMinistryCommand } from './update-ministry.command';

describe('UpdateMinistryCommand', () => {
  const mockData: UpdateMinistryInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    deltek_id: 'test_deltek_id',
    name: 'test_name',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new UpdateMinistryCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "UpdateMinistryCommand"', () => {
    const command = new UpdateMinistryCommand(mockData, mockMetadata);

    expect(command.type).toBe('UpdateMinistryCommand');
  });
});
