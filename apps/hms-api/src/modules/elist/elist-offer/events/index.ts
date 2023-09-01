import { ElistOfferCreatedEvent } from './elist-offer-created/elist-offer-created.event';
import { ElistOfferCreatedHandler } from './elist-offer-created/elist-offer-created.handler';
import { ElistOfferDeletedEvent } from './elist-offer-deleted/elist-offer-deleted.event';
import { ElistOfferDeletedHandler } from './elist-offer-deleted/elist-offer-deleted.handler';
import { ElistOfferUpdatedEvent } from './elist-offer-updated/elist-offer-updated.event';
import { ElistOfferUpdatedHandler } from './elist-offer-updated/elist-offer-updated.handler';

export const Events = {
  ElistOfferCreatedEvent,
  ElistOfferUpdatedEvent,
  ElistOfferDeletedEvent,
};

export const ElistOfferEventHandlers = [ElistOfferCreatedHandler, ElistOfferUpdatedHandler, ElistOfferDeletedHandler];
