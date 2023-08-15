import { LocationUpdatedEvent } from './location-updated.event';

describe('LocationUpdatedEvent', () => {
  it('should be defined', () => {
    expect(new LocationUpdatedEvent()).toBeDefined();
  });
});
