import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteOpportunityInput } from '../../inputs/delete-opportunity.input';

export class OpportunityDeletedEvent implements DomainEvent<'OpportunityDeletedEvent', DeleteOpportunityInput> {
  readonly type: 'OpportunityDeletedEvent';

  readonly data: DeleteOpportunityInput;

  readonly metadata: Metadata;

  constructor(data: DeleteOpportunityInput, metadata: Metadata) {
    this.type = 'OpportunityDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
