import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateElistInput } from '../../inputs/create-elist.input';

export class CreateElistCommand implements DomainEvent<'CreateElistCommand', CreateElistInput> {
  readonly type: 'CreateElistCommand';

  readonly data: CreateElistInput;

  readonly metadata: Metadata;

  constructor(data: CreateElistInput, metadata: Metadata) {
    this.type = 'CreateElistCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
