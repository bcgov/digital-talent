import { CommentCreatedEvent } from './comment-created/comment-created.event';
import { CommentCreatedHandler } from './comment-created/comment-created.handler';
import { CommentDeletedEvent } from './comment-deleted/comment-deleted.event';
import { CommentDeletedHandler } from './comment-deleted/comment-deleted.handler';
import { CommentUpdatedEvent } from './comment-updated/comment-updated.event';
import { CommentUpdatedHandler } from './comment-updated/comment-updated.handler';

export const Events = {
  CommentCreatedEvent,
  CommentUpdatedEvent,
  CommentDeletedEvent,
};

export const CommentEventHandlers = [CommentCreatedHandler, CommentUpdatedHandler, CommentDeletedHandler];
