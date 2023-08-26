import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteApplicationSkillInput } from '../../inputs/delete-application-skill.input';

export class DeleteApplicationSkillCommand
  implements DomainEvent<'DeleteApplicationSkillCommand', DeleteApplicationSkillInput>
{
  readonly type: 'DeleteApplicationSkillCommand';

  readonly data: DeleteApplicationSkillInput;

  readonly metadata: Metadata;

  constructor(data: DeleteApplicationSkillInput, metadata: Metadata) {
    this.type = 'DeleteApplicationSkillCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
