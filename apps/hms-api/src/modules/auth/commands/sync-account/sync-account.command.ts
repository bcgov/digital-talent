import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncAccountDto } from '../../dtos/sync-account.dto';

export class SyncAccountCommand implements DomainEvent<'SyncAccountCommand', SyncAccountDto> {
  readonly type: 'SyncAccountCommand';

  readonly data: SyncAccountDto;

  readonly metadata: Metadata;

  constructor(data: SyncAccountDto, metadata: Metadata) {
    this.type = 'SyncAccountCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
