import { ElistCreatedEvent } from './elist-created/elist-created.event';
import { ElistCreatedHandler } from './elist-created/elist-created.handler';
import { ElistDeletedEvent } from './elist-deleted/elist-deleted.event';
import { ElistDeletedHandler } from './elist-deleted/elist-deleted.handler';
import { ElistUpdatedEvent } from './elist-updated/elist-updated.event';
import { ElistUpdatedHandler } from './elist-updated/elist-updated.handler';

export const Events = {
  ElistCreatedEvent,
  ElistUpdatedEvent,
  ElistDeletedEvent,
};

export const ElistEventHandlers = [ElistCreatedHandler, ElistUpdatedHandler, ElistDeletedHandler];
