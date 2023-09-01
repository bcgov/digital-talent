import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteCompetitionScheduleInput } from '../../inputs/delete-competition-schedule.input';

export class DeleteCompetitionScheduleCommand
  implements DomainEvent<'DeleteCompetitionScheduleCommand', DeleteCompetitionScheduleInput>
{
  readonly type: 'DeleteCompetitionScheduleCommand';

  readonly data: DeleteCompetitionScheduleInput;

  readonly metadata: Metadata;

  constructor(data: DeleteCompetitionScheduleInput, metadata: Metadata) {
    this.type = 'DeleteCompetitionScheduleCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
