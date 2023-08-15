import { LocationDeletedEvent } from './location-deleted.event';

describe('LocationDeletedEvent', () => {
  it('should be defined', () => {
    expect(new LocationDeletedEvent()).toBeDefined();
  });
});
