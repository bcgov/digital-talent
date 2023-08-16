import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteApplicationInput } from '../../inputs/delete-application.input';

export class DeleteApplicationCommand implements DomainEvent<'DeleteApplicationCommand', DeleteApplicationInput> {
  readonly type: 'DeleteApplicationCommand';

  readonly data: DeleteApplicationInput;

  readonly metadata: Metadata;

  constructor(data: DeleteApplicationInput, metadata: Metadata) {
    this.type = 'DeleteApplicationCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
