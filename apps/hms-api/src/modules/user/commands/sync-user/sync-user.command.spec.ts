import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncUserInput } from '../../inputs/sync-user.input';
import { SyncUserCommand } from './sync-user.command';

describe('SyncUserCommand', () => {
  const mockData: SyncUserInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    email: 'test@test.com',
    roles: ['role1', 'role2'],
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new SyncUserCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "SyncUserCommand"', () => {
    const command = new SyncUserCommand(mockData, mockMetadata);

    expect(command.type).toBe('SyncUserCommand');
  });
});
