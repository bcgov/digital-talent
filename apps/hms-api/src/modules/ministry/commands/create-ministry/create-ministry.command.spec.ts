import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateMinistryInput } from '../../inputs/create-ministry.input';
import { CreateMinistryCommand } from './create-ministry.command';

describe('CreateMinistryCommand', () => {
  const mockData: CreateMinistryInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    deltek_id: 'test_deltek_id',
    name: 'test_name',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new CreateMinistryCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "CreateMinistryCommand"', () => {
    const command = new CreateMinistryCommand(mockData, mockMetadata);

    expect(command.type).toBe('CreateMinistryCommand');
  });
});
