import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteElistInput } from '../../inputs/delete-elist.input';

export class ElistDeletedEvent implements DomainEvent<'ElistDeletedEvent', DeleteElistInput> {
  readonly type: 'ElistDeletedEvent';

  readonly data: DeleteElistInput;

  readonly metadata: Metadata;

  constructor(data: DeleteElistInput, metadata: Metadata) {
    this.type = 'ElistDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
