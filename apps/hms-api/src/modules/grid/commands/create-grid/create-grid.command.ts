import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateGridInput } from '../../inputs/create-grid.input';

export class CreateGridCommand implements DomainEvent<'CreateGridCommand', CreateGridInput> {
  readonly type: 'CreateGridCommand';

  readonly data: CreateGridInput;

  readonly metadata: Metadata;

  constructor(data: CreateGridInput, metadata: Metadata) {
    this.type = 'CreateGridCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
