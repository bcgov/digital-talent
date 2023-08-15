import { ApplicationLocationUpdatedEvent } from './application-location-updated.event';

describe('ApplicationLocationUpdatedEvent', () => {
  it('should be defined', () => {
    expect(new ApplicationLocationUpdatedEvent()).toBeDefined();
  });
});
