import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateJobDescriptionInput } from '../../inputs/update-job-description.input';

export class UpdateJobDescriptionCommand
  implements DomainEvent<'UpdateJobDescriptionCommand', UpdateJobDescriptionInput>
{
  readonly type: 'UpdateJobDescriptionCommand';

  readonly data: UpdateJobDescriptionInput;

  readonly metadata: Metadata;

  constructor(data: UpdateJobDescriptionInput, metadata: Metadata) {
    this.type = 'UpdateJobDescriptionCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
