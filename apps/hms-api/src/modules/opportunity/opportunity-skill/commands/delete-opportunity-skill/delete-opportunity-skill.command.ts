import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteOpportunitySkillInput } from '../../inputs/delete-opportunity-skill.input';

export class DeleteOpportunitySkillCommand
  implements DomainEvent<'DeleteOpportunitySkillCommand', DeleteOpportunitySkillInput>
{
  readonly type: 'DeleteOpportunitySkillCommand';

  readonly data: DeleteOpportunitySkillInput;

  readonly metadata: Metadata;

  constructor(data: DeleteOpportunitySkillInput, metadata: Metadata) {
    this.type = 'DeleteOpportunitySkillCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
