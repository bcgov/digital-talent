import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteElistOfferInput } from '../../inputs/delete-elist-offer.input';

export class DeleteElistOfferCommand implements DomainEvent<'DeleteElistOfferCommand', DeleteElistOfferInput> {
  readonly type: 'DeleteElistOfferCommand';

  readonly data: DeleteElistOfferInput;

  readonly metadata: Metadata;

  constructor(data: DeleteElistOfferInput, metadata: Metadata) {
    this.type = 'DeleteElistOfferCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
