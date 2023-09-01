import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateGridInput } from '../../inputs/update-grid.input';

export class UpdateGridCommand implements DomainEvent<'UpdateGridCommand', UpdateGridInput> {
  readonly type: 'UpdateGridCommand';

  readonly data: UpdateGridInput;

  readonly metadata: Metadata;

  constructor(data: UpdateGridInput, metadata: Metadata) {
    this.type = 'UpdateGridCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
