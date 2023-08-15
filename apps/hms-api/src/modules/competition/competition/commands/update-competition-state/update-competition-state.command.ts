import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateCompetitionStateInput } from '../../inputs/update-competition-state.input';

export class UpdateCompetitionStateCommand
  implements DomainEvent<'UpdateCompetitionStateCommand', UpdateCompetitionStateInput>
{
  readonly type: 'UpdateCompetitionStateCommand';

  readonly data: UpdateCompetitionStateInput;

  readonly metadata: Metadata;

  constructor(data: UpdateCompetitionStateInput, metadata: Metadata) {
    this.type = 'UpdateCompetitionStateCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
