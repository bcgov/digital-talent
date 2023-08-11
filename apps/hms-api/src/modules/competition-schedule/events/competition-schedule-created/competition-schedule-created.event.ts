import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateCompetitionScheduleInput } from '../../inputs/create-competition-schedule.input';

export class CompetitionScheduleCreatedEvent
  implements DomainEvent<'CompetitionScheduleCreatedEvent', CreateCompetitionScheduleInput>
{
  readonly type: 'CompetitionScheduleCreatedEvent';

  readonly data: CreateCompetitionScheduleInput;

  readonly metadata: Metadata;

  constructor(data: CreateCompetitionScheduleInput, metadata: Metadata) {
    this.type = 'CompetitionScheduleCreatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
