import { MinistryDeletedEvent } from './ministry-deleted.event';

describe('MinistryDeletedEvent', () => {
  it('should be defined', () => {
    expect(new MinistryDeletedEvent()).toBeDefined();
  });
});
