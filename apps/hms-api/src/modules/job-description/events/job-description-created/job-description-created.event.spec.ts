import { JobDescriptionCreatedEvent } from './job-description-created.event';

describe('JobDescriptionCreatedEvent', () => {
  it('should be defined', () => {
    expect(new JobDescriptionCreatedEvent()).toBeDefined();
  });
});
