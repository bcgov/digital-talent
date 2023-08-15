import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateMinistryInput } from '../../inputs/create-ministry.input';

export class MinistryCreatedEvent implements DomainEvent<'MinistryCreatedEvent', CreateMinistryInput> {
  readonly type: 'MinistryCreatedEvent';

  readonly data: CreateMinistryInput;

  readonly metadata: Metadata;

  constructor(data: CreateMinistryInput, metadata: Metadata) {
    this.type = 'MinistryCreatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
