import { Metadata } from '../event-store/types/metadata.type';
import { AuthState, decide, evolve } from './auth.decider';
import { SyncAccountCommand } from './commands/sync-account/sync-account.command';
import { SyncAccountDto } from './dtos/sync-account.dto';
import { AccountSyncedEvent } from './events/account-synced/account-synced.event';

describe('account.decider', () => {
  const mockInitialState: AuthState = { exists: false };
  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-account-id',
  };

  const mockSyncAccountInput: SyncAccountDto = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    name: 'test_name',
    email: 'test@test.com',
    roles: ['role1', 'role2'],
    sub: 'test_sub',
    identity_provider: 'test_identity_provider',
  };

  const mockSyncAccountCommand = new SyncAccountCommand(mockSyncAccountInput, mockMetadata);

  describe('decide function', () => {
    it('syncs an AccountSyncdEvent correctly', () => {
      const events = decide(mockInitialState, mockSyncAccountCommand);
      expect(events[0]).toBeInstanceOf(AccountSyncedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        name: 'test_name',
        email: 'test@test.com',
        roles: ['role1', 'role2'],
        sub: 'test_sub',
        identity_provider: 'test_identity_provider',
      });
    });
  });

  describe('evolve function', () => {
    it('evolves state for AccountSyncdEvent correctly', () => {
      const mockEvent = new AccountSyncedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          name: 'test_name',
          email: 'test@test.com',
          roles: ['role1', 'role2'],
          sub: 'test_sub',
          identity_provider: 'test_identity_provider',
        },
        { created_by: 'testAccount', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'account',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            name: 'test_name',
            email: 'test@test.com',
            roles: ['role1', 'role2'],
            sub: 'test_sub',
            identity_provider: 'test_identity_provider',
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
