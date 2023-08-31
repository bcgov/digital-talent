import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateOccupationGroupInput } from '../../inputs/create-occupation-group.input';

export class OccupationGroupCreatedEvent
  implements DomainEvent<'OccupationGroupCreatedEvent', CreateOccupationGroupInput>
{
  readonly type: 'OccupationGroupCreatedEvent';

  readonly data: CreateOccupationGroupInput;

  readonly metadata: Metadata;

  constructor(data: CreateOccupationGroupInput, metadata: Metadata) {
    this.type = 'OccupationGroupCreatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
