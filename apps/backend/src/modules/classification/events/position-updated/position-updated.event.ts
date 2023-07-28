import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdatePositionInput } from '../../inputs/update-position.input';

export class PositionUpdatedEvent implements DomainEvent<'PositionUpdatedEvent', UpdatePositionInput> {
  readonly type: 'PositionUpdatedEvent';

  readonly data: UpdatePositionInput;

  readonly metadata: Metadata;

  constructor(data: UpdatePositionInput, metadata: Metadata) {
    this.type = 'PositionUpdatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
