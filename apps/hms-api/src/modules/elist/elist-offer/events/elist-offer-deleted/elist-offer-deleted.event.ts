import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteElistOfferInput } from '../../inputs/delete-elist-offer.input';

export class ElistOfferDeletedEvent implements DomainEvent<'ElistOfferDeletedEvent', DeleteElistOfferInput> {
  readonly type: 'ElistOfferDeletedEvent';

  readonly data: DeleteElistOfferInput;

  readonly metadata: Metadata;

  constructor(data: DeleteElistOfferInput, metadata: Metadata) {
    this.type = 'ElistOfferDeletedEvent';
    this.data = data;
    this.metadata = metadata;
  }
}
