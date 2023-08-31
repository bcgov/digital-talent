import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateOccupationGroupInput } from '../../inputs/update-occupation-group.input';

export class UpdateOccupationGroupCommand
  implements DomainEvent<'UpdateOccupationGroupCommand', UpdateOccupationGroupInput>
{
  readonly type: 'UpdateOccupationGroupCommand';

  readonly data: UpdateOccupationGroupInput;

  readonly metadata: Metadata;

  constructor(data: UpdateOccupationGroupInput, metadata: Metadata) {
    this.type = 'UpdateOccupationGroupCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
