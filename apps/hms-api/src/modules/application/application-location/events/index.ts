import { ApplicationLocationCreatedEvent } from './application-location-created/application-location-created.event';
import { ApplicationLocationCreatedHandler } from './application-location-created/application-location-created.handler';
import { ApplicationLocationDeletedEvent } from './application-location-deleted/application-location-deleted.event';
import { ApplicationLocationDeletedHandler } from './application-location-deleted/application-location-deleted.handler';
import { ApplicationLocationUpdatedEvent } from './application-location-updated/application-location-updated.event';
import { ApplicationLocationUpdatedHandler } from './application-location-updated/application-location-updated.handler';

export const Events = {
  ApplicationLocationCreatedEvent,
  ApplicationLocationUpdatedEvent,
  ApplicationLocationDeletedEvent,
};

export const ApplicationLocationEventHandlers = [
  ApplicationLocationCreatedHandler,
  ApplicationLocationUpdatedHandler,
  ApplicationLocationDeletedHandler,
];
