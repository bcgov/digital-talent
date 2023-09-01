import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteIdentityInput } from '../../inputs';

export class DeleteIdentityCommand implements DomainEvent<'DeleteIdentityCommand', DeleteIdentityInput> {
  readonly type: 'DeleteIdentityCommand';

  readonly data: DeleteIdentityInput;

  readonly metadata: Metadata;

  constructor(data: DeleteIdentityInput, metadata: Metadata) {
    this.type = 'DeleteIdentityCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
