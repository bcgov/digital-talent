import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateApplicationInput } from '../../inputs/update-application.input';

export class ApplicationUpdatedEvent implements DomainEvent<'ApplicationUpdatedEvent', UpdateApplicationInput> {
  readonly type: 'ApplicationUpdatedEvent';

  readonly data: UpdateApplicationInput;

  readonly metadata: Metadata;

  constructor(data: UpdateApplicationInput, metadata: Metadata) {
    this.type = 'ApplicationUpdatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
