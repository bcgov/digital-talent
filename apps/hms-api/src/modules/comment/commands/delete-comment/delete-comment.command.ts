import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteCommentInput } from '../../inputs/delete-comment.input';

export class DeleteCommentCommand implements DomainEvent<'DeleteCommentCommand', DeleteCommentInput> {
  readonly type: 'DeleteCommentCommand';

  readonly data: DeleteCommentInput;

  readonly metadata: Metadata;

  constructor(data: DeleteCommentInput, metadata: Metadata) {
    this.type = 'DeleteCommentCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
