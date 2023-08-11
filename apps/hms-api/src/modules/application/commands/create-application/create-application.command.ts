import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateApplicationInput } from '../../inputs/create-application.input';

export class CreateApplicationCommand implements DomainEvent<'CreateApplicationCommand', CreateApplicationInput> {
  readonly type: 'CreateApplicationCommand';

  readonly data: CreateApplicationInput;

  readonly metadata: Metadata;

  constructor(data: CreateApplicationInput, metadata: Metadata) {
    this.type = 'CreateApplicationCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
