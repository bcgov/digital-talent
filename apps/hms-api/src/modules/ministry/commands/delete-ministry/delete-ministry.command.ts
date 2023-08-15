import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteMinistryInput } from '../../inputs/delete-ministry.input';

export class DeleteMinistryCommand implements DomainEvent<'DeleteMinistryCommand', DeleteMinistryInput> {
  readonly type: 'DeleteMinistryCommand';

  readonly data: DeleteMinistryInput;

  readonly metadata: Metadata;

  constructor(data: DeleteMinistryInput, metadata: Metadata) {
    this.type = 'DeleteMinistryCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
