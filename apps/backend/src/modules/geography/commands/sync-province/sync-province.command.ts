import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncProvinceInput } from '../../inputs/sync-province.input';

export class SyncProvinceCommand implements DomainEvent<'SyncProvinceCommand', SyncProvinceInput> {
  readonly type: 'SyncProvinceCommand';

  readonly data: SyncProvinceInput;

  readonly metadata: Metadata;

  constructor(data: SyncProvinceInput, metadata: Metadata) {
    this.type = 'SyncProvinceCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
