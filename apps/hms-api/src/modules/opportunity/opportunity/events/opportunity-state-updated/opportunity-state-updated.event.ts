import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateOpportunityStateInput } from '../../inputs/update-opportunity-state.input';

export class OpportunityStateUpdatedEvent
  implements DomainEvent<'OpportunityStateUpdatedEvent', UpdateOpportunityStateInput>
{
  readonly type: 'OpportunityStateUpdatedEvent';

  readonly data: UpdateOpportunityStateInput;

  readonly metadata: Metadata;

  constructor(data: UpdateOpportunityStateInput, metadata: Metadata) {
    this.type = 'OpportunityStateUpdatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
