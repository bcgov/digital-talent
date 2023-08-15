import { ApplicationCreatedEvent } from './application-created.event';

describe('ApplicationCreatedEvent', () => {
  it('should be defined', () => {
    expect(new ApplicationCreatedEvent()).toBeDefined();
  });
});
