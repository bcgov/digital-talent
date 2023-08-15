import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateLocationInput } from '../../inputs/create-location.input';

export class LocationCreatedEvent implements DomainEvent<'LocationCreatedEvent', CreateLocationInput> {
  readonly type: 'LocationCreatedEvent';

  readonly data: CreateLocationInput;

  readonly metadata: Metadata;

  constructor(data: CreateLocationInput, metadata: Metadata) {
    this.type = 'LocationCreatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
