import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateOpportunityInput } from '../../inputs/create-opportunity.input';

export class OpportunityCreatedEvent implements DomainEvent<'OpportunityCreatedEvent', CreateOpportunityInput> {
  readonly type: 'OpportunityCreatedEvent';

  readonly data: CreateOpportunityInput;

  readonly metadata: Metadata;

  constructor(data: CreateOpportunityInput, metadata: Metadata) {
    this.type = 'OpportunityCreatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
