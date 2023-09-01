import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteApplicationSkillInput } from '../../inputs/delete-application-skill.input';

export class ApplicationSkillDeletedEvent
  implements DomainEvent<'ApplicationSkillDeletedEvent', DeleteApplicationSkillInput>
{
  readonly type: 'ApplicationSkillDeletedEvent';

  readonly data: DeleteApplicationSkillInput;

  readonly metadata: Metadata;

  constructor(data: DeleteApplicationSkillInput, metadata: Metadata) {
    this.type = 'ApplicationSkillDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
