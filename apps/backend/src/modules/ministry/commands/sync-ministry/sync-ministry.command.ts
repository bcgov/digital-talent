import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncMinistryInput } from '../../inputs/sync-ministry.input';

export class SyncMinistryCommand implements DomainEvent<'SyncMinistryCommand', SyncMinistryInput> {
  readonly type: 'SyncMinistryCommand';

  readonly data: SyncMinistryInput;

  readonly metadata: Metadata;

  constructor(data: SyncMinistryInput, metadata: Metadata) {
    this.type = 'SyncMinistryCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
