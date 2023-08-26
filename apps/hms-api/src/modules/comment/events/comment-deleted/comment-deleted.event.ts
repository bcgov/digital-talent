import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteCommentInput } from '../../inputs/delete-comment.input';

export class CommentDeletedEvent implements DomainEvent<'CommentDeletedEvent', DeleteCommentInput> {
  readonly type: 'CommentDeletedEvent';

  readonly data: DeleteCommentInput;

  readonly metadata: Metadata;

  constructor(data: DeleteCommentInput, metadata: Metadata) {
    this.type = 'CommentDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
