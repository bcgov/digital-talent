import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateCompetitionInput } from '../../inputs/create-competition.input';

export class CompetitionCreatedEvent implements DomainEvent<'CompetitionCreatedEvent', CreateCompetitionInput> {
  readonly type: 'CompetitionCreatedEvent';

  readonly data: CreateCompetitionInput;

  readonly metadata: Metadata;

  constructor(data: CreateCompetitionInput, metadata: Metadata) {
    this.type = 'CompetitionCreatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
