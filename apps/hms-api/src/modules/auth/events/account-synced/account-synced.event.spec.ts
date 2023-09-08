import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncAccountDto } from '../../dtos/sync-account.dto';
import { AccountSyncedEvent } from './account-synced.event';

describe('AccountSyncdEvent', () => {
  const mockData: SyncAccountDto = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    name: 'test_name',
    email: 'test@test.com',
    roles: ['role1', 'role2'],
    sub: 'test_sub',
    identity_provider: 'test_identity_provider',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new AccountSyncedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "AccountSyncedEvent"', () => {
    const event = new AccountSyncedEvent(mockData, mockMetadata);

    expect(event.type).toBe('AccountSyncedEvent');
  });
});
