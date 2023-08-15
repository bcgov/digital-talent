import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteCompetitionScheduleInput } from '../../inputs/delete-competition-schedule.input';

export class CompetitionScheduleDeletedEvent
  implements DomainEvent<'CompetitionScheduleDeletedEvent', DeleteCompetitionScheduleInput>
{
  readonly type: 'CompetitionScheduleDeletedEvent';

  readonly data: DeleteCompetitionScheduleInput;

  readonly metadata: Metadata;

  constructor(data: DeleteCompetitionScheduleInput, metadata: Metadata) {
    this.type = 'CompetitionScheduleDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
