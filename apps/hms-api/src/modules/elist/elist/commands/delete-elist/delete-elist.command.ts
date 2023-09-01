import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteElistInput } from '../../inputs/delete-elist.input';

export class DeleteElistCommand implements DomainEvent<'DeleteElistCommand', DeleteElistInput> {
  readonly type: 'DeleteElistCommand';

  readonly data: DeleteElistInput;

  readonly metadata: Metadata;

  constructor(data: DeleteElistInput, metadata: Metadata) {
    this.type = 'DeleteElistCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
