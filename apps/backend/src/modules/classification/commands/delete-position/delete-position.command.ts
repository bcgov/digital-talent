import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeletePositionInput } from '../../inputs/delete-position.input';

export class DeletePositionCommand implements DomainEvent<'DeletePositionCommand', DeletePositionInput> {
  readonly type: 'DeletePositionCommand';

  readonly data: DeletePositionInput;

  readonly metadata: Metadata;

  constructor(data: DeletePositionInput, metadata: Metadata) {
    this.type = 'DeletePositionCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
