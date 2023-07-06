import { DomainEvent } from '../../../event-store/types/domain-event.type';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncCountryInput } from '../../inputs/sync-country.input';

export class SyncCountryCommand implements DomainEvent<'SyncCountryCommand', SyncCountryInput> {
  readonly type: 'SyncCountryCommand';

  readonly data: SyncCountryInput;

  readonly metadata: Metadata;

  constructor(data: SyncCountryInput, metadata: Metadata) {
    this.type = 'SyncCountryCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
