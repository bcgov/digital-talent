import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateCompetitionInput } from '../../inputs/update-competition.input';

export class CompetitionUpdatedEvent implements DomainEvent<'CompetitionUpdatedEvent', UpdateCompetitionInput> {
  readonly type: 'CompetitionUpdatedEvent';

  readonly data: UpdateCompetitionInput;

  readonly metadata: Metadata;

  constructor(data: UpdateCompetitionInput, metadata: Metadata) {
    this.type = 'CompetitionUpdatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
