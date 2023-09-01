import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateCommentInput } from '../../inputs/update-comment.input';

export class UpdateCommentCommand implements DomainEvent<'UpdateCommentCommand', UpdateCommentInput> {
  readonly type: 'UpdateCommentCommand';

  readonly data: UpdateCommentInput;

  readonly metadata: Metadata;

  constructor(data: UpdateCommentInput, metadata: Metadata) {
    this.type = 'UpdateCommentCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
