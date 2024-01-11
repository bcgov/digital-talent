import { Metadata } from '../event-store/types/metadata.type';
import { UserState, decide, evolve } from './user.decider';
import { SyncUserCommand } from './commands/sync-user/sync-user.command';
import { SyncUserInput } from './inputs/sync-user.input';
import { UserSyncedEvent } from './events/user-synced/user-synced.event';

describe('user.decider', () => {
  const mockInitialState: UserState = { exists: false };
  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockSyncUserInput: SyncUserInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    email: 'test@test.com',
    roles: ['role1', 'role2'],
  };

  const mockSyncUserCommand = new SyncUserCommand(mockSyncUserInput, mockMetadata);

  describe('decide function', () => {
    it('syncs an UserSyncdEvent correctly', () => {
      const events = decide(mockInitialState, mockSyncUserCommand);
      expect(events[0]).toBeInstanceOf(UserSyncedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        email: 'test@test.com',
        roles: ['role1', 'role2'],
      });
    });
  });

  describe('evolve function', () => {
    it('evolves state for UserSyncdEvent correctly', () => {
      const mockEvent = new UserSyncedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          email: 'test@test.com',
          roles: ['role1', 'role2'],
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'user',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            email: 'test@test.com',
            roles: ['role1', 'role2'],
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
