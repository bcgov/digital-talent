import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateMinistryInput } from '../../inputs/update-ministry.input';

export class MinistryUpdatedEvent implements DomainEvent<'MinistryUpdatedEvent', UpdateMinistryInput> {
  readonly type: 'MinistryUpdatedEvent';

  readonly data: UpdateMinistryInput;

  readonly metadata: Metadata;

  constructor(data: UpdateMinistryInput, metadata: Metadata) {
    this.type = 'MinistryUpdatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
