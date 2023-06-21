import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncClassificationInput } from '../../inputs/sync-classification.input';

export class SyncClassificationCommand implements DomainEvent<'SyncClassificationCommand', SyncClassificationInput> {
  readonly type: 'SyncClassificationCommand';

  readonly data: SyncClassificationInput;

  readonly metadata: Metadata;

  constructor(data: SyncClassificationInput, metadata: Metadata) {
    this.type = 'SyncClassificationCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
