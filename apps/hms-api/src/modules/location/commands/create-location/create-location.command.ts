import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateLocationInput } from '../../inputs/create-location.input';

export class CreateLocationCommand implements DomainEvent<'CreateLocationCommand', CreateLocationInput> {
  readonly type: 'CreateLocationCommand';

  readonly data: CreateLocationInput;

  readonly metadata: Metadata;

  constructor(data: CreateLocationInput, metadata: Metadata) {
    this.type = 'CreateLocationCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
