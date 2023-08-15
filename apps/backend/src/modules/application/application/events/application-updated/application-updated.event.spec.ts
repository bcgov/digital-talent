import { ApplicationUpdatedEvent } from './application-updated.event';

describe('ApplicationUpdatedEvent', () => {
  it('should be defined', () => {
    expect(new ApplicationUpdatedEvent()).toBeDefined();
  });
});
