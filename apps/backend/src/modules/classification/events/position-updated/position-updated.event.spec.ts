import { PositionUpdatedEvent } from './position-updated.event';

describe('PositionUpdatedEvent', () => {
  it('should be defined', () => {
    expect(new PositionUpdatedEvent()).toBeDefined();
  });
});
