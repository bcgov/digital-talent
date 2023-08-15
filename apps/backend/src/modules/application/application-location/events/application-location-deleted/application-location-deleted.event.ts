import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteApplicationLocationInput } from '../../inputs/delete-application-location.input';

export class ApplicationLocationDeletedEvent
  implements DomainEvent<'ApplicationLocationDeletedEvent', DeleteApplicationLocationInput>
{
  readonly type: 'ApplicationLocationDeletedEvent';

  readonly data: DeleteApplicationLocationInput;

  readonly metadata: Metadata;

  constructor(data: DeleteApplicationLocationInput, metadata: Metadata) {
    this.type = 'ApplicationLocationDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
