import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncAccountDto } from '../../dtos/sync-account.dto';

export class AccountSyncedEvent implements DomainEvent<'AccountSyncedEvent', SyncAccountDto> {
  readonly type: 'AccountSyncedEvent';

  readonly data: SyncAccountDto;

  readonly metadata: Metadata;

  constructor(data: SyncAccountDto, metadata: Metadata) {
    this.type = 'AccountSyncedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
