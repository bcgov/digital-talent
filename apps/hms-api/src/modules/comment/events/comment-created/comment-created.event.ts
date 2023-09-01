import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateCommentInput } from '../../inputs/create-comment.input';

export class CommentCreatedEvent implements DomainEvent<'CommentCreatedEvent', CreateCommentInput> {
  readonly type: 'CommentCreatedEvent';

  readonly data: CreateCommentInput;

  readonly metadata: Metadata;

  constructor(data: CreateCommentInput, metadata: Metadata) {
    this.type = 'CommentCreatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
