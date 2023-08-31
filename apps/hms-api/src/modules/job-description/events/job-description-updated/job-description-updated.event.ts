import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateJobDescriptionInput } from '../../inputs/update-job-description.input';

export class JobDescriptionUpdatedEvent
  implements DomainEvent<'JobDescriptionUpdatedEvent', UpdateJobDescriptionInput>
{
  readonly type: 'JobDescriptionUpdatedEvent';

  readonly data: UpdateJobDescriptionInput;

  readonly metadata: Metadata;

  constructor(data: UpdateJobDescriptionInput, metadata: Metadata) {
    this.type = 'JobDescriptionUpdatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
