import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateCompetitionScheduleInput } from '../../inputs/competition-schedule.input';

export class CreateCompetitionScheduleCommand
  implements DomainEvent<'CreateCompetitionScheduleCommand', CreateCompetitionScheduleInput>
{
  readonly type: 'CreateCompetitionScheduleCommand';

  readonly data: CreateCompetitionScheduleInput;

  readonly metadata: Metadata;

  constructor(data: CreateCompetitionScheduleInput, metadata: Metadata) {
    this.type = 'CreateCompetitionScheduleCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
