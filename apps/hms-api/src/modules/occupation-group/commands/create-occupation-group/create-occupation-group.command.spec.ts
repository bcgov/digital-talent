import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateOccupationGroupInput } from '../../inputs/create-occupation-group.input';
import { CreateOccupationGroupCommand } from './create-occupation-group.command';

describe('CreateOccupationGroupCommand', () => {
  const mockData: CreateOccupationGroupInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    code: 'test_code',
    name: 'test_name',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new CreateOccupationGroupCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "CreateOccupationGroupCommand"', () => {
    const command = new CreateOccupationGroupCommand(mockData, mockMetadata);

    expect(command.type).toBe('CreateOccupationGroupCommand');
  });
});
