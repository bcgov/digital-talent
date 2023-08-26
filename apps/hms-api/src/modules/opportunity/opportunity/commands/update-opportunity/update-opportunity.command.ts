import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateOpportunityInput } from '../../inputs/update-opportunity.input';

export class UpdateOpportunityCommand implements DomainEvent<'UpdateOpportunityCommand', UpdateOpportunityInput> {
  readonly type: 'UpdateOpportunityCommand';

  readonly data: UpdateOpportunityInput;

  readonly metadata: Metadata;

  constructor(data: UpdateOpportunityInput, metadata: Metadata) {
    this.type = 'UpdateOpportunityCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
