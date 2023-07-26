import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateCompetitionScheduleInput } from '../../inputs/competition-schedule.input';

export class UpdateCompetitionScheduleCommand
  implements DomainEvent<'UpdateCompetitionScheduleCommand', CreateCompetitionScheduleInput>
{
  readonly type: 'UpdateCompetitionScheduleCommand';

  readonly data: CreateCompetitionScheduleInput;

  readonly metadata: Metadata;

  constructor(data: CreateCompetitionScheduleInput, metadata: Metadata) {
    this.type = 'UpdateCompetitionScheduleCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
