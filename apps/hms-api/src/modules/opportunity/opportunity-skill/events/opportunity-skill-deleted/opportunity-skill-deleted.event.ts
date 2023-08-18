import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteOpportunitySkillInput } from '../../inputs/delete-opportunity-skill.input';

export class OpportunitySkillDeletedEvent
  implements DomainEvent<'OpportunitySkillDeletedEvent', DeleteOpportunitySkillInput>
{
  readonly type: 'OpportunitySkillDeletedEvent';

  readonly data: DeleteOpportunitySkillInput;

  readonly metadata: Metadata;

  constructor(data: DeleteOpportunitySkillInput, metadata: Metadata) {
    this.type = 'OpportunitySkillDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
