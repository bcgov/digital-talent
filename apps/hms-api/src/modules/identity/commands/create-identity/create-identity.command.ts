import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateIdentityInput } from '../../inputs/create-identity.input';

export class CreateIdentityCommand implements DomainEvent<'CreateIdentityCommand', CreateIdentityInput> {
  readonly type: 'CreateIdentityCommand';

  readonly data: CreateIdentityInput;

  readonly metadata: Metadata;

  constructor(data: CreateIdentityInput, metadata: Metadata) {
    this.type = 'CreateIdentityCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
