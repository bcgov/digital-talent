import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateOpportunitySkillInput } from '../../inputs/create-opportunity-skill.input';

export class OpportunitySkillCreatedEvent
  implements DomainEvent<'OpportunitySkillCreatedEvent', CreateOpportunitySkillInput>
{
  readonly type: 'OpportunitySkillCreatedEvent';

  readonly data: CreateOpportunitySkillInput;

  readonly metadata: Metadata;

  constructor(data: CreateOpportunitySkillInput, metadata: Metadata) {
    this.type = 'OpportunitySkillCreatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
