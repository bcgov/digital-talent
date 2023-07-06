import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncCityInput } from '../../inputs/sync-city.input';

export class CitySyncedEvent implements DomainEvent<'CitySyncedEvent', SyncCityInput> {
  readonly type: 'CitySyncedEvent';

  readonly data: SyncCityInput;

  readonly metadata: Metadata;

  constructor(data: SyncCityInput, metadata: Metadata) {
    this.type = 'CitySyncedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
