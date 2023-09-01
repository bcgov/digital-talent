import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteMinistryInput } from '../../inputs/delete-ministry.input';

export class MinistryDeletedEvent implements DomainEvent<'MinistryDeletedEvent', DeleteMinistryInput> {
  readonly type: 'MinistryDeletedEvent';

  readonly data: DeleteMinistryInput;

  readonly metadata: Metadata;

  constructor(data: DeleteMinistryInput, metadata: Metadata) {
    this.type = 'MinistryDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
