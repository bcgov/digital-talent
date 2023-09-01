import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteJobDescriptionInput } from '../../inputs/delete-job-description.input';

export class DeleteJobDescriptionCommand
  implements DomainEvent<'DeleteJobDescriptionCommand', DeleteJobDescriptionInput>
{
  readonly type: 'DeleteJobDescriptionCommand';

  readonly data: DeleteJobDescriptionInput;

  readonly metadata: Metadata;

  constructor(data: DeleteJobDescriptionInput, metadata: Metadata) {
    this.type = 'DeleteJobDescriptionCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
