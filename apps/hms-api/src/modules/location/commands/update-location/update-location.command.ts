import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateLocationInput } from '../../inputs/update-location.input';

export class UpdateLocationCommand implements DomainEvent<'UpdateLocationCommand', UpdateLocationInput> {
  readonly type: 'UpdateLocationCommand';

  readonly data: UpdateLocationInput;

  readonly metadata: Metadata;

  constructor(data: UpdateLocationInput, metadata: Metadata) {
    this.type = 'UpdateLocationCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
