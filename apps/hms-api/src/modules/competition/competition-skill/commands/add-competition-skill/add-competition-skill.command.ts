import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { AddCompetitionSkillInput } from '../../inputs/add-competition-skill.input';

export class AddCompetitionSkillCommand implements DomainEvent<'AddCompetitionSkillCommand', AddCompetitionSkillInput> {
  readonly type: 'AddCompetitionSkillCommand';

  readonly data: AddCompetitionSkillInput;

  readonly metadata: Metadata;

  constructor(data: AddCompetitionSkillInput, metadata: Metadata) {
    this.type = 'AddCompetitionSkillCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
