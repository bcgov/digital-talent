import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncUserInput } from '../../inputs/sync-user.input';

export class UserSyncedEvent implements DomainEvent<'UserSyncedEvent', SyncUserInput> {
  readonly type: 'UserSyncedEvent';

  readonly data: SyncUserInput;

  readonly metadata: Metadata;

  constructor(data: SyncUserInput, metadata: Metadata) {
    this.type = 'UserSyncedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
