import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateApplicationSkillInput } from '../../inputs/update-application-skill.input';

export class ApplicationSkillUpdatedEvent
  implements DomainEvent<'ApplicationSkillUpdatedEvent', UpdateApplicationSkillInput>
{
  readonly type: 'ApplicationSkillUpdatedEvent';

  readonly data: UpdateApplicationSkillInput;

  readonly metadata: Metadata;

  constructor(data: UpdateApplicationSkillInput, metadata: Metadata) {
    this.type = 'ApplicationSkillUpdatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
