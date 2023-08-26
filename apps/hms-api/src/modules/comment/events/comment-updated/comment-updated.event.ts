import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateCommentInput } from '../../inputs/update-comment.input';

export class CommentUpdatedEvent implements DomainEvent<'CommentUpdatedEvent', UpdateCommentInput> {
  readonly type: 'CommentUpdatedEvent';

  readonly data: UpdateCommentInput;

  readonly metadata: Metadata;

  constructor(data: UpdateCommentInput, metadata: Metadata) {
    this.type = 'CommentUpdatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
