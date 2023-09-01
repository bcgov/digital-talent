import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteOpportunityLocationInput } from '../../inputs/delete-opportunity-location.input';

export class DeleteOpportunityLocationCommand
  implements DomainEvent<'DeleteOpportunityLocationCommand', DeleteOpportunityLocationInput>
{
  readonly type: 'DeleteOpportunityLocationCommand';

  readonly data: DeleteOpportunityLocationInput;

  readonly metadata: Metadata;

  constructor(data: DeleteOpportunityLocationInput, metadata: Metadata) {
    this.type = 'DeleteOpportunityLocationCommand';
    this.data = { ...data, deleted_at: new Date() };
    this.metadata = metadata;
  }
}
