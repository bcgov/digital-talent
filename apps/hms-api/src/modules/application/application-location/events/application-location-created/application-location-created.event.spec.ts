import { ApplicationLocationCreatedEvent } from './application-location-created.event';

describe('ApplicationLocationCreatedEvent', () => {
  it('should be defined', () => {
    expect(new ApplicationLocationCreatedEvent()).toBeDefined();
  });
});
