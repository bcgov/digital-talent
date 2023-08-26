import { ClassificationUpdatedEvent } from './classification-updated.event';

describe('ClassificationUpdatedEvent', () => {
  it('should be defined', () => {
    expect(new ClassificationUpdatedEvent()).toBeDefined();
  });
});
