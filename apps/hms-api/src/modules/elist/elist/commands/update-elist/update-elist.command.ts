import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateElistInput } from '../../inputs/update-elist.input';

export class UpdateElistCommand implements DomainEvent<'UpdateElistCommand', UpdateElistInput> {
  readonly type: 'UpdateElistCommand';

  readonly data: UpdateElistInput;

  readonly metadata: Metadata;

  constructor(data: UpdateElistInput, metadata: Metadata) {
    this.type = 'UpdateElistCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
