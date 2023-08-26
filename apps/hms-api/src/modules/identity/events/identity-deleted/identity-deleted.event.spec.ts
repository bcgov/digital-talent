import { IdentityDeletedEvent } from './identity-deleted.event';

describe('IdentityDeletedEvent', () => {
  it('should be defined', () => {
    expect(new IdentityDeletedEvent()).toBeDefined();
  });
});
