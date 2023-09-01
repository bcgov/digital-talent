import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateApplicationLocationInput } from '../../inputs/create-application-location.input';

export class ApplicationLocationCreatedEvent
  implements DomainEvent<'ApplicationLocationCreatedEvent', CreateApplicationLocationInput>
{
  readonly type: 'ApplicationLocationCreatedEvent';

  readonly data: CreateApplicationLocationInput;

  readonly metadata: Metadata;

  constructor(data: CreateApplicationLocationInput, metadata: Metadata) {
    this.type = 'ApplicationLocationCreatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
