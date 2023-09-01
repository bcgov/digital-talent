import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateJobDescriptionInput } from '../../inputs/create-job-description.input';

export class JobDescriptionCreatedEvent
  implements DomainEvent<'JobDescriptionCreatedEvent', CreateJobDescriptionInput>
{
  readonly type: 'JobDescriptionCreatedEvent';

  readonly data: CreateJobDescriptionInput;

  readonly metadata: Metadata;

  constructor(data: CreateJobDescriptionInput, metadata: Metadata) {
    this.type = 'JobDescriptionCreatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
