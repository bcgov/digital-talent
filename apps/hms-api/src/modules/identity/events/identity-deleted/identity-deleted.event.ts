import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteIdentityInput } from '../../inputs';

export class IdentityDeletedEvent implements DomainEvent<'IdentityDeletedEvent', DeleteIdentityInput> {
  readonly type: 'IdentityDeletedEvent';

  readonly data: DeleteIdentityInput;

  readonly metadata: Metadata;

  constructor(data: DeleteIdentityInput, metadata: Metadata) {
    this.type = 'IdentityDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
