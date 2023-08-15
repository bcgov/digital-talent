import { ApplicationDeletedEvent } from './application-deleted.event';

describe('ApplicationDeletedEvent', () => {
  it('should be defined', () => {
    expect(new ApplicationDeletedEvent()).toBeDefined();
  });
});
