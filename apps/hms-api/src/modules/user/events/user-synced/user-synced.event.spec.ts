import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncUserInput } from '../../inputs/sync-user.input';
import { UserSyncedEvent } from './user-synced.event';

describe('UserSyncdEvent', () => {
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
    const event = new UserSyncedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "UserSyncdEvent"', () => {
    const event = new UserSyncedEvent(mockData, mockMetadata);

    expect(event.type).toBe('UserSyncdEvent');
  });
});
