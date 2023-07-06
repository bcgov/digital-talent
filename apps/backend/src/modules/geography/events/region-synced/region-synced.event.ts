import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncRegionInput } from '../../inputs/sync-region.input';

export class RegionSyncedEvent implements DomainEvent<'RegionSyncedEvent', SyncRegionInput> {
  readonly type: 'RegionSyncedEvent';

  readonly data: SyncRegionInput;

  readonly metadata: Metadata;

  constructor(data: SyncRegionInput, metadata: Metadata) {
    this.type = 'RegionSyncedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
