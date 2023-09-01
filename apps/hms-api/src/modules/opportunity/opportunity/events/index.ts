import { OpportunityCreatedEvent } from './opportunity-created/opportunity-created.event';
import { OpportunityCreatedHandler } from './opportunity-created/opportunity-created.handler';
import { OpportunityDeletedEvent } from './opportunity-deleted/opportunity-deleted.event';
import { OpportunityDeletedHandler } from './opportunity-deleted/opportunity-deleted.handler';
import { OpportunityUpdatedEvent } from './opportunity-updated/opportunity-updated.event';
import { OpportunityUpdatedHandler } from './opportunity-updated/opportunity-updated.handler';

export const OpportunityEvents = {
  OpportunityCreatedEvent,
  OpportunityUpdatedEvent,
  OpportunityDeletedEvent,
};

export const OpportunityEventHandlers = [
  OpportunityCreatedHandler,
  OpportunityUpdatedHandler,
  OpportunityDeletedHandler,
];
