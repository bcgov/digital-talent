import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateOpportunityInput } from '../../inputs/create-opportunity.input';

export class CreateOpportunityCommand implements DomainEvent<'CreateOpportunityCommand', CreateOpportunityInput> {
  readonly type: 'CreateOpportunityCommand';

  readonly data: CreateOpportunityInput;

  readonly metadata: Metadata;

  constructor(data: CreateOpportunityInput, metadata: Metadata) {
    this.type = 'CreateOpportunityCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
