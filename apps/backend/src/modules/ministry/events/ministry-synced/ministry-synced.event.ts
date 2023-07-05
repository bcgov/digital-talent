import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncMinistryInput } from '../../inputs/sync-ministry.input';

export class MinistrySyncedEvent implements DomainEvent<'MinistrySyncedEvent', SyncMinistryInput> {
  readonly type: 'MinistrySyncedEvent';

  readonly data: SyncMinistryInput;

  readonly metadata: Metadata;

  constructor(data: SyncMinistryInput, metadata: Metadata) {
    this.type = 'MinistrySyncedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
