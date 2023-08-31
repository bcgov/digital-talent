import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteOccupationGroupInput } from '../../inputs/delete-occupation-group.input';

export class OccupationGroupDeletedEvent
  implements DomainEvent<'OccupationGroupDeletedEvent', DeleteOccupationGroupInput>
{
  readonly type: 'OccupationGroupDeletedEvent';

  readonly data: DeleteOccupationGroupInput;

  readonly metadata: Metadata;

  constructor(data: DeleteOccupationGroupInput, metadata: Metadata) {
    this.type = 'OccupationGroupDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
