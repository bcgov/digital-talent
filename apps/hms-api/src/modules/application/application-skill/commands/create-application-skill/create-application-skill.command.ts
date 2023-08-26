import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateApplicationSkillInput } from '../../inputs/create-application-skill.input';

export class CreateApplicationSkillCommand
  implements DomainEvent<'CreateApplicationSkillCommand', CreateApplicationSkillInput>
{
  readonly type: 'CreateApplicationSkillCommand';

  readonly data: CreateApplicationSkillInput;

  readonly metadata: Metadata;

  constructor(data: CreateApplicationSkillInput, metadata: Metadata) {
    this.type = 'CreateApplicationSkillCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
