import { UserSyncedEvent } from './user-synced.event';

describe('UserSyncedEvent', () => {
  it('should be defined', () => {
    expect(new UserSyncedEvent()).toBeDefined();
  });
});
