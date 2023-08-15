import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { AddCompetitionSkillInput } from '../../inputs/add-competition-skill.input';

export class CompetitionSkillAddedEvent implements DomainEvent<'CompetitionSkillAddedEvent', AddCompetitionSkillInput> {
  readonly type: 'CompetitionSkillAddedEvent';

  readonly data: AddCompetitionSkillInput;

  readonly metadata: Metadata;

  constructor(data: AddCompetitionSkillInput, metadata: Metadata) {
    this.type = 'CompetitionSkillAddedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
