import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateCompetitionInput } from '../../inputs/update-competition.input';

export class UpdateCompetitionCommand implements DomainEvent<'UpdateCompetitionCommand', UpdateCompetitionInput> {
  readonly type: 'UpdateCompetitionCommand';

  readonly data: UpdateCompetitionInput;

  readonly metadata: Metadata;

  constructor(data: UpdateCompetitionInput, metadata: Metadata) {
    this.type = 'UpdateCompetitionCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
