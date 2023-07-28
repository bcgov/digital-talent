import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreatePositionInput } from '../../inputs/create-position.input';

export class CreatePositionCommand implements DomainEvent<'CreatePositionCommand', CreatePositionInput> {
  readonly type: 'CreatePositionCommand';

  readonly data: CreatePositionInput;

  readonly metadata: Metadata;

  constructor(data: CreatePositionInput, metadata: Metadata) {
    this.type = 'CreatePositionCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
