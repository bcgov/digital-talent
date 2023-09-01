import { CommentUpdatedEvent } from './comment-updated.event';

describe('CommentUpdatedEvent', () => {
  it('should be defined', () => {
    expect(new CommentUpdatedEvent()).toBeDefined();
  });
});
