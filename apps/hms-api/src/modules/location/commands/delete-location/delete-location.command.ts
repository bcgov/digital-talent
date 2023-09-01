import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteLocationInput } from '../../inputs/delete-location.input';

export class DeleteLocationCommand implements DomainEvent<'DeleteLocationCommand', DeleteLocationInput> {
  readonly type: 'DeleteLocationCommand';

  readonly data: DeleteLocationInput;

  readonly metadata: Metadata;

  constructor(data: DeleteLocationInput, metadata: Metadata) {
    this.type = 'DeleteLocationCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
