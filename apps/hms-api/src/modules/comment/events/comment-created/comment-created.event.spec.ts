import { CommentCreatedEvent } from './comment-created.event';

describe('CommentCreatedEvent', () => {
  it('should be defined', () => {
    expect(new CommentCreatedEvent()).toBeDefined();
  });
});
