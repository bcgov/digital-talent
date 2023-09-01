import { MinistryCreatedEvent } from './ministry-created/ministry-created.event';
import { MinistryCreatedHandler } from './ministry-created/ministry-created.handler';
import { MinistryDeletedEvent } from './ministry-deleted/ministry-deleted.event';
import { MinistryDeletedHandler } from './ministry-deleted/ministry-deleted.handler';
import { MinistryUpdatedEvent } from './ministry-updated/ministry-updated.event';
import { MinistryUpdatedHandler } from './ministry-updated/ministry-updated.handler';

export const MinistryEvents = {
  MinistryCreatedEvent,
  MinistryUpdatedEvent,
  MinistryDeletedEvent,
};

export const MinistryEventHandlers = [MinistryCreatedHandler, MinistryUpdatedHandler, MinistryDeletedHandler];
