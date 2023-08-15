import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateApplicationLocationInput } from '../../inputs/create-application-location.input';

export class CreateApplicationLocationCommand
  implements DomainEvent<'CreateApplicationLocationCommand', CreateApplicationLocationInput>
{
  readonly type: 'CreateApplicationLocationCommand';

  readonly data: CreateApplicationLocationInput;

  readonly metadata: Metadata;

  constructor(data: CreateApplicationLocationInput, metadata: Metadata) {
    this.type = 'CreateApplicationLocationCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
