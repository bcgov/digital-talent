import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeletePositionInput } from '../../inputs/delete-position.input';

export class PositionDeletedEvent implements DomainEvent<'PositionDeletedEvent', DeletePositionInput> {
  readonly type: 'PositionDeletedEvent';

  readonly data: DeletePositionInput;

  readonly metadata: Metadata;

  constructor(data: DeletePositionInput, metadata: Metadata) {
    this.type = 'PositionDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
