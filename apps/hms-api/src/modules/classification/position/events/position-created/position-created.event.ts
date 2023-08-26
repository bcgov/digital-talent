import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreatePositionInput } from '../../inputs/create-position.input';

export class PositionCreatedEvent implements DomainEvent<'PositionCreatedEvent', CreatePositionInput> {
  readonly type: 'PositionCreatedEvent';

  readonly data: CreatePositionInput;

  readonly metadata: Metadata;

  constructor(data: CreatePositionInput, metadata: Metadata) {
    this.type = 'PositionCreatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
