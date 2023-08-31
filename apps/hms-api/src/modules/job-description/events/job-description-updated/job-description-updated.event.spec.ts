import { JobDescriptionUpdatedEvent } from './job-description-updated.event';

describe('JobDescriptionUpdatedEvent', () => {
  it('should be defined', () => {
    expect(new JobDescriptionUpdatedEvent()).toBeDefined();
  });
});
