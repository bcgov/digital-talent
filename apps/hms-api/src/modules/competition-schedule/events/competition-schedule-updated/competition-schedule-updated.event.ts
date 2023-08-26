import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateCompetitionScheduleInput } from '../../inputs/update-competition-schedule.input';

export class CompetitionScheduleUpdatedEvent
  implements DomainEvent<'CompetitionScheduleUpdatedEvent', UpdateCompetitionScheduleInput>
{
  readonly type: 'CompetitionScheduleUpdatedEvent';

  readonly data: UpdateCompetitionScheduleInput;

  readonly metadata: Metadata;

  constructor(data: UpdateCompetitionScheduleInput, metadata: Metadata) {
    this.type = 'CompetitionScheduleUpdatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
