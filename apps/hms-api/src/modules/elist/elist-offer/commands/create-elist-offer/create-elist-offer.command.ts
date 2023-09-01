import { DomainEvent } from '../../../../event-store/types/domain-event.type';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateElistOfferInput } from '../../inputs/create-elist-offer.input';

export class CreateElistOfferCommand implements DomainEvent<'CreateElistOfferCommand', CreateElistOfferInput> {
  readonly type: 'CreateElistOfferCommand';

  readonly data: CreateElistOfferInput;

  readonly metadata: Metadata;

  constructor(data: CreateElistOfferInput, metadata: Metadata) {
    this.type = 'CreateElistOfferCommand';
    this.data = data;
    this.metadata = metadata;
  }
}
