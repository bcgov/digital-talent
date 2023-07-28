import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdatePositionInput } from '../../inputs/update-position.input';

export class UpdatePositionCommand implements DomainEvent<'UpdatePositionCommand', UpdatePositionInput> {
  readonly type: 'UpdatePositionCommand';

  readonly data: UpdatePositionInput;

  readonly metadata: Metadata;

  constructor(data: UpdatePositionInput, metadata: Metadata) {
    this.type = 'UpdatePositionCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
