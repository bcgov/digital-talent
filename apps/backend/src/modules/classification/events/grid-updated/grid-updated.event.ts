import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateGridInput } from '../../inputs/grid/update-grid.input';

export class GridUpdatedEvent implements DomainEvent<'GridUpdatedEvent', UpdateGridInput> {
  readonly type: 'GridUpdatedEvent';

  readonly data: UpdateGridInput;

  readonly metadata: Metadata;

  constructor(data: UpdateGridInput, metadata: Metadata) {
    this.type = 'GridUpdatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
