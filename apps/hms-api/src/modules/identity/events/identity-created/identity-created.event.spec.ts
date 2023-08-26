import { IdentityCreatedEvent } from './identity-created.event';

describe('IdentityCreatedEvent', () => {
  it('should be defined', () => {
    expect(new IdentityCreatedEvent()).toBeDefined();
  });
});
