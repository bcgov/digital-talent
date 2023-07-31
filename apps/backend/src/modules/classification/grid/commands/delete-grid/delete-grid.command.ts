import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteGridInput } from '../../inputs/delete-grid.input';

export class DeleteGridCommand implements DomainEvent<'DeleteGridCommand', DeleteGridInput> {
  readonly type: 'DeleteGridCommand';

  readonly data: DeleteGridInput;

  readonly metadata: Metadata;

  constructor(data: DeleteGridInput, metadata: Metadata) {
    this.type = 'DeleteGridCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
