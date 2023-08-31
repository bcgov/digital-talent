import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateOccupationGroupInput } from '../../inputs/create-occupation-group.input';

export class CreateOccupationGroupCommand
  implements DomainEvent<'CreateOccupationGroupCommand', CreateOccupationGroupInput>
{
  readonly type: 'CreateOccupationGroupCommand';

  readonly data: CreateOccupationGroupInput;

  readonly metadata: Metadata;

  constructor(data: CreateOccupationGroupInput, metadata: Metadata) {
    this.type = 'CreateOccupationGroupCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
