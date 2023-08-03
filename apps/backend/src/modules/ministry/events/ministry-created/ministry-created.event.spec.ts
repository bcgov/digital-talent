import { MinistryCreatedEvent } from './ministry-created.event';

describe('MinistryCreatedEvent', () => {
  it('should be defined', () => {
    expect(new MinistryCreatedEvent()).toBeDefined();
  });
});
