import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateClassificationInput } from '../../inputs/create-classification.input';

export class CreateClassificationCommand
  implements DomainEvent<'CreateClassificationCommand', CreateClassificationInput>
{
  readonly type: 'CreateClassificationCommand';

  readonly data: CreateClassificationInput;

  readonly metadata: Metadata;

  constructor(data: CreateClassificationInput, metadata: Metadata) {
    this.type = 'CreateClassificationCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
