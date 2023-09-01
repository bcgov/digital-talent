import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateClassificationInput } from '../../inputs/update-classification.input';

export class ClassificationUpdatedEvent
  implements DomainEvent<'ClassificationUpdatedEvent', UpdateClassificationInput>
{
  readonly type: 'ClassificationUpdatedEvent';

  readonly data: UpdateClassificationInput;

  readonly metadata: Metadata;

  constructor(data: UpdateClassificationInput, metadata: Metadata) {
    this.type = 'ClassificationUpdatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
