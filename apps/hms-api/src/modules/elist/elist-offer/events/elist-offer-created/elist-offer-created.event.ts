import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateElistOfferInput } from '../../inputs/create-elist-offer.input';

export class ElistOfferCreatedEvent implements DomainEvent<'ElistOfferCreatedEvent', CreateElistOfferInput> {
  readonly type: 'ElistOfferCreatedEvent';

  readonly data: CreateElistOfferInput;

  readonly metadata: Metadata;

  constructor(data: CreateElistOfferInput, metadata: Metadata) {
    this.type = 'ElistOfferCreatedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
