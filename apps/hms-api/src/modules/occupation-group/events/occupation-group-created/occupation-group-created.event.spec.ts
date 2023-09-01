import { OccupationGroupCreatedEvent } from './occupation-group-created.event';

describe('OccupationGroupCreatedEvent', () => {
  it('should be defined', () => {
    expect(new OccupationGroupCreatedEvent()).toBeDefined();
  });
});
