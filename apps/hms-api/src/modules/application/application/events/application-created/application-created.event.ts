import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateApplicationInput } from '../../inputs/create-application.input';

export class ApplicationCreatedEvent implements DomainEvent<'ApplicationCreatedEvent', CreateApplicationInput> {
  readonly type: 'ApplicationCreatedEvent';

  readonly data: CreateApplicationInput;

  readonly metadata: Metadata;

  constructor(data: CreateApplicationInput, metadata: Metadata) {
    this.type = 'ApplicationCreatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
