import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteOccupationGroupInput } from '../../inputs/delete-occupation-group.input';

export class DeleteOccupationGroupCommand
  implements DomainEvent<'DeleteOccupationGroupCommand', DeleteOccupationGroupInput>
{
  readonly type: 'DeleteOccupationGroupCommand';

  readonly data: DeleteOccupationGroupInput;

  readonly metadata: Metadata;

  constructor(data: DeleteOccupationGroupInput, metadata: Metadata) {
    this.type = 'DeleteOccupationGroupCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
