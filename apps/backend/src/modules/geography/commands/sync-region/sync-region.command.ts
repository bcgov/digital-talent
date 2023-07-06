import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncRegionInput } from '../../inputs/sync-region.input';

export class SyncRegionCommand implements DomainEvent<'SyncRegionCommand', SyncRegionInput> {
  readonly type: 'SyncRegionCommand';

  readonly data: SyncRegionInput;

  readonly metadata: Metadata;

  constructor(data: SyncRegionInput, metadata: Metadata) {
    this.type = 'SyncRegionCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
