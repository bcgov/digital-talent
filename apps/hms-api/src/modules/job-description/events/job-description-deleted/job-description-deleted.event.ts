import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteJobDescriptionInput } from '../../inputs/delete-job-description.input';

export class JobDescriptionDeletedEvent
  implements DomainEvent<'JobDescriptionDeletedEvent', DeleteJobDescriptionInput>
{
  readonly type: 'JobDescriptionDeletedEvent';

  readonly data: DeleteJobDescriptionInput;

  readonly metadata: Metadata;

  constructor(data: DeleteJobDescriptionInput, metadata: Metadata) {
    this.type = 'JobDescriptionDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
