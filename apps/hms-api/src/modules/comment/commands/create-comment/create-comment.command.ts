import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateCommentInput } from '../../inputs/create-comment.input';

export class CreateCommentCommand implements DomainEvent<'CreateCommentCommand', CreateCommentInput> {
  readonly type: 'CreateCommentCommand';

  readonly data: CreateCommentInput;

  readonly metadata: Metadata;

  constructor(data: CreateCommentInput, metadata: Metadata) {
    this.type = 'CreateCommentCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
