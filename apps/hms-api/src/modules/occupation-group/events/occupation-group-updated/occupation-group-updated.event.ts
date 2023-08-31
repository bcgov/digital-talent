import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateOccupationGroupInput } from '../../inputs/update-occupation-group.input';

export class OccupationGroupUpdatedEvent
  implements DomainEvent<'OccupationGroupUpdatedEvent', UpdateOccupationGroupInput>
{
  readonly type: 'OccupationGroupUpdatedEvent';

  readonly data: UpdateOccupationGroupInput;

  readonly metadata: Metadata;

  constructor(data: UpdateOccupationGroupInput, metadata: Metadata) {
    this.type = 'OccupationGroupUpdatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
