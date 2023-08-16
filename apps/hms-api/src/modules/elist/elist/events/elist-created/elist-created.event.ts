import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateElistInput } from '../../inputs/create-elist.input';

export class ElistCreatedEvent implements DomainEvent<'ElistCreatedEvent', CreateElistInput> {
  readonly type: 'ElistCreatedEvent';

  readonly data: CreateElistInput;

  readonly metadata: Metadata;

  constructor(data: CreateElistInput, metadata: Metadata) {
    this.type = 'ElistCreatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
