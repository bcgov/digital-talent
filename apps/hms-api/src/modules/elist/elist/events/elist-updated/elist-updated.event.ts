import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateElistInput } from '../../inputs/update-elist.input';

export class ElistUpdatedEvent implements DomainEvent<'ElistUpdatedEvent', UpdateElistInput> {
  readonly type: 'ElistUpdatedEvent';

  readonly data: UpdateElistInput;

  readonly metadata: Metadata;

  constructor(data: UpdateElistInput, metadata: Metadata) {
    this.type = 'ElistUpdatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
