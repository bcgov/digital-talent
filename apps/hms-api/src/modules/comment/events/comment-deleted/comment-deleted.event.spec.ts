import { CommentDeletedEvent } from './comment-deleted.event';

describe('CommentDeletedEvent', () => {
  it('should be defined', () => {
    expect(new CommentDeletedEvent()).toBeDefined();
  });
});
