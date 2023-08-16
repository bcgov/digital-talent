import { CreateElistOfferHandler } from './create-elist-offer/create-elist-offer.handler';
import { DeleteElistOfferHandler } from './delete-elist-offer/delete-elist-offer.handler';
import { UpdateElistOfferHandler } from './update-elist-offer/update-elist-offer.handler';

export const ElistOfferCommandHandlers = [CreateElistOfferHandler, UpdateElistOfferHandler, DeleteElistOfferHandler];
