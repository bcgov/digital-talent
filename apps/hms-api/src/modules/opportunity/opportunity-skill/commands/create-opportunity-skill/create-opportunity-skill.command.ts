import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateOpportunitySkillInput } from '../../inputs/create-opportunity-skill.input';

export class CreateOpportunitySkillCommand
  implements DomainEvent<'CreateOpportunitySkillCommand', CreateOpportunitySkillInput>
{
  readonly type: 'CreateOpportunitySkillCommand';

  readonly data: CreateOpportunitySkillInput;

  readonly metadata: Metadata;

  constructor(data: CreateOpportunitySkillInput, metadata: Metadata) {
    this.type = 'CreateOpportunitySkillCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
