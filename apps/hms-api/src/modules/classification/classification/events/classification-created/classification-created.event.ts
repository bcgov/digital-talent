import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateClassificationInput } from '../../inputs/create-classification.input';

export class ClassificationCreatedEvent
  implements DomainEvent<'ClassificationCreatedEvent', CreateClassificationInput>
{
  readonly type: 'ClassificationCreatedEvent';

  readonly data: CreateClassificationInput;

  readonly metadata: Metadata;

  constructor(data: CreateClassificationInput, metadata: Metadata) {
    this.type = 'ClassificationCreatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
