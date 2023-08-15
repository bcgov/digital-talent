import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateLocationInput } from '../../inputs/update-location.input';

export class LocationUpdatedEvent implements DomainEvent<'LocationUpdatedEvent', UpdateLocationInput> {
  readonly type: 'LocationUpdatedEvent';

  readonly data: UpdateLocationInput;

  readonly metadata: Metadata;

  constructor(data: UpdateLocationInput, metadata: Metadata) {
    this.type = 'LocationUpdatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
