import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateElistOfferInput } from '../../inputs/update-elist-offer.input';

export class UpdateElistOfferCommand implements DomainEvent<'UpdateElistOfferCommand', UpdateElistOfferInput> {
  readonly type: 'UpdateElistOfferCommand';

  readonly data: UpdateElistOfferInput;

  readonly metadata: Metadata;

  constructor(data: UpdateElistOfferInput, metadata: Metadata) {
    this.type = 'UpdateElistOfferCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
