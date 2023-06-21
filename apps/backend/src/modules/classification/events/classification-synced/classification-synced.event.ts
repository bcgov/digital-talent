import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncClassificationInput } from '../../inputs/sync-classification.input';

export class ClassificationSyncedEvent implements DomainEvent<'ClassificationSyncedEvent', SyncClassificationInput> {
  readonly type: 'ClassificationSyncedEvent';

  readonly data: SyncClassificationInput;

  readonly metadata: Metadata;

  constructor(data: SyncClassificationInput, metadata: Metadata) {
    this.type = 'ClassificationSyncedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
