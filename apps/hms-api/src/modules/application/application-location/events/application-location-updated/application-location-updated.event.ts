import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateApplicationLocationInput } from '../../inputs/update-application-location.input';

export class ApplicationLocationUpdatedEvent
  implements DomainEvent<'ApplicationLocationUpdatedEvent', UpdateApplicationLocationInput>
{
  readonly type: 'ApplicationLocationUpdatedEvent';

  readonly data: UpdateApplicationLocationInput;

  readonly metadata: Metadata;

  constructor(data: UpdateApplicationLocationInput, metadata: Metadata) {
    this.type = 'ApplicationLocationUpdatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
