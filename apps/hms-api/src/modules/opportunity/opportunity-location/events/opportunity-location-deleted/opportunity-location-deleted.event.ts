import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteOpportunityLocationInput } from '../../inputs/delete-opportunity-location.input';

export class OpportunityLocationDeletedEvent
  implements DomainEvent<'OpportunityLocationDeletedEvent', DeleteOpportunityLocationInput>
{
  readonly type: 'OpportunityLocationDeletedEvent';

  readonly data: DeleteOpportunityLocationInput;

  readonly metadata: Metadata;

  constructor(data: DeleteOpportunityLocationInput, metadata: Metadata) {
    this.type = 'OpportunityLocationDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
