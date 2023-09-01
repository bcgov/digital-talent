import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateApplicationInput } from '../../inputs/update-application.input';

export class UpdateApplicationCommand implements DomainEvent<'UpdateApplicationCommand', UpdateApplicationInput> {
  readonly type: 'UpdateApplicationCommand';

  readonly data: UpdateApplicationInput;

  readonly metadata: Metadata;

  constructor(data: UpdateApplicationInput, metadata: Metadata) {
    this.type = 'UpdateApplicationCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
