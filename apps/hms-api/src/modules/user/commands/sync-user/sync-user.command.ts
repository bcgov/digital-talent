import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncUserInput } from '../../inputs/sync-user.input';

export class SyncUserCommand implements DomainEvent<'SyncUserCommand', SyncUserInput> {
  readonly type: 'SyncUserCommand';

  readonly data: SyncUserInput;

  readonly metadata: Metadata;

  constructor(data: SyncUserInput, metadata: Metadata) {
    this.type = 'SyncUserCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
