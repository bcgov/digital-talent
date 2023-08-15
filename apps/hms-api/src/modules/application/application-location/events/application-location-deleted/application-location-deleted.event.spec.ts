import { ApplicationLocationDeletedEvent } from './application-location-deleted.event';

describe('ApplicationLocationDeletedEvent', () => {
  it('should be defined', () => {
    expect(new ApplicationLocationDeletedEvent()).toBeDefined();
  });
});
