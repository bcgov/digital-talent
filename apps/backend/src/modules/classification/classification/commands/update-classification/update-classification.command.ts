import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateClassificationInput } from '../../inputs/update-classification.input';

export class UpdateClassificationCommand
  implements DomainEvent<'UpdateClassificationCommand', UpdateClassificationInput>
{
  readonly type: 'UpdateClassificationCommand';

  readonly data: UpdateClassificationInput;

  readonly metadata: Metadata;

  constructor(data: UpdateClassificationInput, metadata: Metadata) {
    this.type = 'UpdateClassificationCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
