import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateIdentityInput } from '../../inputs/create-identity.input';

export class IdentityCreatedEvent implements DomainEvent<'IdentityCreatedEvent', CreateIdentityInput> {
  readonly type: 'IdentityCreatedEvent';

  readonly data: CreateIdentityInput;

  readonly metadata: Metadata;

  constructor(data: CreateIdentityInput, metadata: Metadata) {
    this.type = 'IdentityCreatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
