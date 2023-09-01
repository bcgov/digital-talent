import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateApplicationSkillInput } from '../../inputs/update-application-skill.input';

export class UpdateApplicationSkillCommand
  implements DomainEvent<'UpdateApplicationSkillCommand', UpdateApplicationSkillInput>
{
  readonly type: 'UpdateApplicationSkillCommand';

  readonly data: UpdateApplicationSkillInput;

  readonly metadata: Metadata;

  constructor(data: UpdateApplicationSkillInput, metadata: Metadata) {
    this.type = 'UpdateApplicationSkillCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
