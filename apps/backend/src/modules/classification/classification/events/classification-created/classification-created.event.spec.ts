import { ClassificationCreatedEvent } from './classification-created.event';

describe('ClassificationCreatedEvent', () => {
  it('should be defined', () => {
    expect(new ClassificationCreatedEvent()).toBeDefined();
  });
});
