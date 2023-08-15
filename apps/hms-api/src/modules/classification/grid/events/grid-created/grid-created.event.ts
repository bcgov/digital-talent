import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateGridInput } from '../../inputs/create-grid.input';

export class GridCreatedEvent implements DomainEvent<'GridCreatedEvent', CreateGridInput> {
  readonly type: 'GridCreatedEvent';

  readonly data: CreateGridInput;

  readonly metadata: Metadata;

  constructor(data: CreateGridInput, metadata: Metadata) {
    this.type = 'GridCreatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
