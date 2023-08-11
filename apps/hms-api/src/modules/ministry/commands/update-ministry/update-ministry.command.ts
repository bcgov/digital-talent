import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateMinistryInput } from '../../inputs/update-ministry.input';

export class UpdateMinistryCommand implements DomainEvent<'UpdateMinistryCommand', UpdateMinistryInput> {
  readonly type: 'UpdateMinistryCommand';

  readonly data: UpdateMinistryInput;

  readonly metadata: Metadata;

  constructor(data: UpdateMinistryInput, metadata: Metadata) {
    this.type = 'UpdateMinistryCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
