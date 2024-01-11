import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteOpportunityInput } from '../../inputs/delete-opportunity.input';

export class DeleteOpportunityCommand implements DomainEvent<'DeleteOpportunityCommand', DeleteOpportunityInput> {
  readonly type: 'DeleteOpportunityCommand';

  readonly data: DeleteOpportunityInput;

  readonly metadata: Metadata;

  constructor(data: DeleteOpportunityInput, metadata: Metadata) {
    this.type = 'DeleteOpportunityCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
