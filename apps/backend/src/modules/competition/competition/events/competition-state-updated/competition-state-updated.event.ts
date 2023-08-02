import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateCompetitionStateInput } from '../../inputs/update-competition-state.input';

export class CompetitionStateUpdatedEvent
  implements DomainEvent<'CompetitionStateUpdatedEvent', UpdateCompetitionStateInput>
{
  readonly type: 'CompetitionStateUpdatedEvent';

  readonly data: UpdateCompetitionStateInput;

  readonly metadata: Metadata;

  constructor(data: UpdateCompetitionStateInput, metadata: Metadata) {
    this.type = 'CompetitionStateUpdatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
