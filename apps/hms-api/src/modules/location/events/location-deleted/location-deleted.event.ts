import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteLocationInput } from '../../inputs/delete-location.input';

export class LocationDeletedEvent implements DomainEvent<'LocationDeletedEvent', DeleteLocationInput> {
  readonly type: 'LocationDeletedEvent';

  readonly data: DeleteLocationInput;

  readonly metadata: Metadata;

  constructor(data: DeleteLocationInput, metadata: Metadata) {
    this.type = 'LocationDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
