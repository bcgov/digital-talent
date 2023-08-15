import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteCompetitionInput } from '../../inputs/delete-competition.input';

export class DeleteCompetitionCommand implements DomainEvent<'DeleteCompetitionCommand', DeleteCompetitionInput> {
  readonly type: 'DeleteCompetitionCommand';

  readonly data: DeleteCompetitionInput;

  readonly metadata: Metadata;

  constructor(data: DeleteCompetitionInput, metadata: Metadata) {
    this.type = 'DeleteCompetitionCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
