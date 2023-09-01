import { AccountSyncedEvent } from './account-synced.event';

describe('AccountSyncedEvent', () => {
  it('should be defined', () => {
    expect(new AccountSyncedEvent()).toBeDefined();
  });
});
