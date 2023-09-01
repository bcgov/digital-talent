import { OpportunityLocationCreatedEvent } from './opportunity-location-created/opportunity-location-created.event';
import { OpportunityLocationCreatedHandler } from './opportunity-location-created/opportunity-location-created.handler';
import { OpportunityLocationDeletedEvent } from './opportunity-location-deleted/opportunity-location-deleted.event';
import { OpportunityLocationDeletedHandler } from './opportunity-location-deleted/opportunity-location-deleted.handler';

export const Events = {
  OpportunityLocationCreatedEvent,
  OpportunityLocationDeletedEvent,
};

export const OpportunityLocationEventHandlers = [OpportunityLocationCreatedHandler, OpportunityLocationDeletedHandler];
