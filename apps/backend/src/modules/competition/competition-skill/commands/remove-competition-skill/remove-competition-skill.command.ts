import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { RemoveCompetitionSkillInput } from '../../inputs/remove-competition-skill.input';

export class RemoveCompetitionSkillCommand
  implements DomainEvent<'RemoveCompetitionSkillCommand', RemoveCompetitionSkillInput>
{
  readonly type: 'RemoveCompetitionSkillCommand';

  readonly data: RemoveCompetitionSkillInput;

  readonly metadata: Metadata;

  constructor(data: RemoveCompetitionSkillInput, metadata: Metadata) {
    this.type = 'RemoveCompetitionSkillCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
