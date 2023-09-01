import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateOpportunityLocationInput } from '../../inputs/create-opportunity-location.input';

export class OpportunityLocationCreatedEvent
  implements DomainEvent<'OpportunityLocationCreatedEvent', CreateOpportunityLocationInput>
{
  readonly type: 'OpportunityLocationCreatedEvent';

  readonly data: CreateOpportunityLocationInput;

  readonly metadata: Metadata;

  constructor(data: CreateOpportunityLocationInput, metadata: Metadata) {
    this.type = 'OpportunityLocationCreatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
