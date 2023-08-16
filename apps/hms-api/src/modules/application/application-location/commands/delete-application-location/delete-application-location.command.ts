import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteApplicationLocationInput } from '../../inputs/delete-application-location.input';

export class DeleteApplicationLocationCommand
  implements DomainEvent<'DeleteApplicationLocationCommand', DeleteApplicationLocationInput>
{
  readonly type: 'DeleteApplicationLocationCommand';

  readonly data: DeleteApplicationLocationInput;

  readonly metadata: Metadata;

  constructor(data: DeleteApplicationLocationInput, metadata: Metadata) {
    this.type = 'DeleteApplicationLocationCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
