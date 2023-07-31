import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteGridInput } from '../../inputs/grid/delete-grid.input';

export class GridDeletedEvent implements DomainEvent<'GridDeletedEvent', DeleteGridInput> {
  readonly type: 'GridDeletedEvent';

  readonly data: DeleteGridInput;

  readonly metadata: Metadata;

  constructor(data: DeleteGridInput, metadata: Metadata) {
    this.type = 'GridDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
