import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateApplicationLocationInput } from '../../inputs/update-application-location.input';

export class UpdateApplicationLocationCommand
  implements DomainEvent<'UpdateApplicationLocationCommand', UpdateApplicationLocationInput>
{
  readonly type: 'UpdateApplicationLocationCommand';

  readonly data: UpdateApplicationLocationInput;

  readonly metadata: Metadata;

  constructor(data: UpdateApplicationLocationInput, metadata: Metadata) {
    this.type = 'UpdateApplicationLocationCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
