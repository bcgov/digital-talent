import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateCompetitionScheduleInput } from '../../inputs/update-competition-schedule.input';

export class UpdateCompetitionScheduleCommand
  implements DomainEvent<'UpdateCompetitionScheduleCommand', UpdateCompetitionScheduleInput>
{
  readonly type: 'UpdateCompetitionScheduleCommand';

  readonly data: UpdateCompetitionScheduleInput;

  readonly metadata: Metadata;

  constructor(data: UpdateCompetitionScheduleInput, metadata: Metadata) {
    this.type = 'UpdateCompetitionScheduleCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
