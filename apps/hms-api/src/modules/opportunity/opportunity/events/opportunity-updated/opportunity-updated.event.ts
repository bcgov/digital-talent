import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateOpportunityInput } from '../../inputs/update-opportunity.input';

export class OpportunityUpdatedEvent implements DomainEvent<'OpportunityUpdatedEvent', UpdateOpportunityInput> {
  readonly type: 'OpportunityUpdatedEvent';

  readonly data: UpdateOpportunityInput;

  readonly metadata: Metadata;

  constructor(data: UpdateOpportunityInput, metadata: Metadata) {
    this.type = 'OpportunityUpdatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
