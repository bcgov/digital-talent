import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncProvinceInput } from '../../inputs/sync-province.input';

export class ProvinceSyncedEvent implements DomainEvent<'ProvinceSyncedEvent', SyncProvinceInput> {
  readonly type: 'ProvinceSyncedEvent';

  readonly data: SyncProvinceInput;

  readonly metadata: Metadata;

  constructor(data: SyncProvinceInput, metadata: Metadata) {
    this.type = 'ProvinceSyncedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
