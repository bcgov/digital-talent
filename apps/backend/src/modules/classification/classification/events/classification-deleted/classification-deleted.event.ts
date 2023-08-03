import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteClassificationInput } from '../../inputs/delete-classification.input';

export class ClassificationDeletedEvent
  implements DomainEvent<'ClassificationDeletedEvent', DeleteClassificationInput>
{
  readonly type: 'ClassificationDeletedEvent';

  readonly data: DeleteClassificationInput;

  readonly metadata: Metadata;

  constructor(data: DeleteClassificationInput, metadata: Metadata) {
    this.type = 'ClassificationDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
