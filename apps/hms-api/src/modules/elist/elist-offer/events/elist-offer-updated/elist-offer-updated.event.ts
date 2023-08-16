import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateElistOfferInput } from '../../inputs/update-elist-offer.input';

export class ElistOfferUpdatedEvent implements DomainEvent<'ElistOfferUpdatedEvent', UpdateElistOfferInput> {
  readonly type: 'ElistOfferUpdatedEvent';

  readonly data: UpdateElistOfferInput;

  readonly metadata: Metadata;

  constructor(data: UpdateElistOfferInput, metadata: Metadata) {
    this.type = 'ElistOfferUpdatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
