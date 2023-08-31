import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateJobDescriptionInput } from '../../inputs/create-job-description.input';

export class CreateJobDescriptionCommand
  implements DomainEvent<'CreateJobDescriptionCommand', CreateJobDescriptionInput>
{
  readonly type: 'CreateJobDescriptionCommand';

  readonly data: CreateJobDescriptionInput;

  readonly metadata: Metadata;

  constructor(data: CreateJobDescriptionInput, metadata: Metadata) {
    this.type = 'CreateJobDescriptionCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
