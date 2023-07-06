import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncCityInput } from '../../inputs/sync-city.input';

export class SyncCityCommand implements DomainEvent<'SyncCityCommand', SyncCityInput> {
  readonly type: 'SyncCityCommand';

  readonly data: SyncCityInput;

  readonly metadata: Metadata;

  constructor(data: SyncCityInput, metadata: Metadata) {
    this.type = 'SyncCityCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
