import { JobDescriptionDeletedEvent } from './job-description-deleted.event';

describe('JobDescriptionDeletedEvent', () => {
  it('should be defined', () => {
    expect(new JobDescriptionDeletedEvent()).toBeDefined();
  });
});
