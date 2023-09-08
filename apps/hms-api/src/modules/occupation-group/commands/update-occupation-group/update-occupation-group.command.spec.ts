import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateOccupationGroupInput } from '../../inputs/update-occupation-group.input';
import { UpdateOccupationGroupCommand } from './update-occupation-group.command';

describe('UpdateOccupationGroupCommand', () => {
  const mockData: UpdateOccupationGroupInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    code: 'test_code',
    name: 'test_name',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new UpdateOccupationGroupCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "UpdateOccupationGroupCommand"', () => {
    const command = new UpdateOccupationGroupCommand(mockData, mockMetadata);

    expect(command.type).toBe('UpdateOccupationGroupCommand');
  });
});
