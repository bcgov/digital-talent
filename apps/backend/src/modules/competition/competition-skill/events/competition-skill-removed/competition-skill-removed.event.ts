import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { RemoveCompetitionSkillInput } from '../../inputs/remove-competition-skill.input';

export class CompetitionSkillRemovedEvent
  implements DomainEvent<'CompetitionSkillRemovedEvent', RemoveCompetitionSkillInput>
{
  readonly type: 'CompetitionSkillRemovedEvent';

  readonly data: RemoveCompetitionSkillInput;

  readonly metadata: Metadata;

  constructor(data: RemoveCompetitionSkillInput, metadata: Metadata) {
    this.type = 'CompetitionSkillRemovedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
