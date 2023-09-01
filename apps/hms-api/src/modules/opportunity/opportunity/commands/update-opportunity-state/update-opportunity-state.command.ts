import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateOpportunityStateInput } from '../../inputs/update-opportunity-state.input';

export class UpdateOpportunityStateCommand
  implements DomainEvent<'UpdateOpportunityStateCommand', UpdateOpportunityStateInput>
{
  readonly type: 'UpdateOpportunityStateCommand';

  readonly data: UpdateOpportunityStateInput;

  readonly metadata: Metadata;

  constructor(data: UpdateOpportunityStateInput, metadata: Metadata) {
    this.type = 'UpdateOpportunityStateCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
