import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteCompetitionInput } from '../../inputs/delete-competition.input';

export class CompetitionDeletedEvent implements DomainEvent<'CompetitionDeletedEvent', DeleteCompetitionInput> {
  readonly type: 'CompetitionDeletedEvent';

  readonly data: DeleteCompetitionInput;

  readonly metadata: Metadata;

  constructor(data: DeleteCompetitionInput, metadata: Metadata) {
    this.type = 'CompetitionDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
