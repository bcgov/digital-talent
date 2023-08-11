import { ApplicationCreatedEvent } from './application-created/application-created.event';
import { ApplicationCreatedHandler } from './application-created/application-created.handler';
import { ApplicationDeletedEvent } from './application-deleted/application-deleted.event';
import { ApplicationDeletedHandler } from './application-deleted/application-deleted.handler';
import { ApplicationUpdatedEvent } from './application-updated/application-updated.event';
import { ApplicationUpdatedHandler } from './application-updated/application-updated.handler';

export const Events = {
  ApplicationCreatedEvent,
  ApplicationUpdatedEvent,
  ApplicationDeletedEvent,
};

export const EventHandlers = [ApplicationCreatedHandler, ApplicationUpdatedHandler, ApplicationDeletedHandler];
