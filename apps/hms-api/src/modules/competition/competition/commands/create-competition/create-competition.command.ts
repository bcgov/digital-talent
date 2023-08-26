import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateCompetitionInput } from '../../inputs/create-competition.input';

export class CreateCompetitionCommand implements DomainEvent<'CreateCompetitionCommand', CreateCompetitionInput> {
  readonly type: 'CreateCompetitionCommand';

  readonly data: CreateCompetitionInput;

  readonly metadata: Metadata;

  constructor(data: CreateCompetitionInput, metadata: Metadata) {
    this.type = 'CreateCompetitionCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
