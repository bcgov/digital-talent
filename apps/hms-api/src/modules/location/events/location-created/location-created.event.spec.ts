import { LocationCreatedEvent } from './location-created.event';

describe('LocationCreatedEvent', () => {
  it('should be defined', () => {
    expect(new LocationCreatedEvent()).toBeDefined();
  });
});
