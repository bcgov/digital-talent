import { PositionDeletedEvent } from './position-deleted.event';

describe('PositionDeletedEvent', () => {
  it('should be defined', () => {
    expect(new PositionDeletedEvent()).toBeDefined();
  });
});
