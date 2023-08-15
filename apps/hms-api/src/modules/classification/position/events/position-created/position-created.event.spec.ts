import { PositionCreatedEvent } from './position-created.event';

describe('PositionCreatedEvent', () => {
  it('should be defined', () => {
    expect(new PositionCreatedEvent()).toBeDefined();
  });
});
