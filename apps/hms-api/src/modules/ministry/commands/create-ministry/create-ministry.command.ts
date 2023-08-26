import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateMinistryInput } from '../../inputs/create-ministry.input';

export class CreateMinistryCommand implements DomainEvent<'CreateMinistryCommand', CreateMinistryInput> {
  readonly type: 'CreateMinistryCommand';

  readonly data: CreateMinistryInput;

  readonly metadata: Metadata;

  constructor(data: CreateMinistryInput, metadata: Metadata) {
    this.type = 'CreateMinistryCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
