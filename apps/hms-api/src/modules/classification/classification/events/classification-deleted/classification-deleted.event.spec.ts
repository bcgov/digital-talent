import { ClassificationDeletedEvent } from './classification-deleted.event';

describe('ClassificationDeletedEvent', () => {
  it('should be defined', () => {
    expect(new ClassificationDeletedEvent()).toBeDefined();
  });
});
