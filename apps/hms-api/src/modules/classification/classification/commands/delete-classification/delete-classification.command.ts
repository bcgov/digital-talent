import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteClassificationInput } from '../../inputs/delete-classification.input';

export class DeleteClassificationCommand
  implements DomainEvent<'DeleteClassificationCommand', DeleteClassificationInput>
{
  readonly type: 'DeleteClassificationCommand';

  readonly data: DeleteClassificationInput;

  readonly metadata: Metadata;

  constructor(data: DeleteClassificationInput, metadata: Metadata) {
    this.type = 'DeleteClassificationCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
