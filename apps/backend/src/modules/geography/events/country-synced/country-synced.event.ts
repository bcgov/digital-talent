import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncCountryInput } from '../../inputs/sync-country.input';

export class CountrySyncedEvent implements DomainEvent<'CountrySyncedEvent', SyncCountryInput> {
  readonly type: 'CountrySyncedEvent';

  readonly data: SyncCountryInput;

  readonly metadata: Metadata;

  constructor(data: SyncCountryInput, metadata: Metadata) {
    this.type = 'CountrySyncedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
