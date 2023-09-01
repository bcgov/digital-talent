import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateOpportunityLocationInput } from '../../inputs/create-opportunity-location.input';

export class CreateOpportunityLocationCommand
  implements DomainEvent<'CreateOpportunityLocationCommand', CreateOpportunityLocationInput>
{
  readonly type: 'CreateOpportunityLocationCommand';

  readonly data: CreateOpportunityLocationInput;

  readonly metadata: Metadata;

  constructor(data: CreateOpportunityLocationInput, metadata: Metadata) {
    this.type = 'CreateOpportunityLocationCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
