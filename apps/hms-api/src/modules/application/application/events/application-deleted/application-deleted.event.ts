import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteApplicationInput } from '../../inputs/delete-application.input';

export class ApplicationDeletedEvent implements DomainEvent<'ApplicationDeletedEvent', DeleteApplicationInput> {
  readonly type: 'ApplicationDeletedEvent';

  readonly data: DeleteApplicationInput;

  readonly metadata: Metadata;

  constructor(data: DeleteApplicationInput, metadata: Metadata) {
    this.type = 'ApplicationDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
