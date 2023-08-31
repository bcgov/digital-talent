import { LocationCreatedEvent } from './location-created/location-created.event';
import { LocationCreatedHandler } from './location-created/location-created.handler';
import { LocationDeletedEvent } from './location-deleted/location-deleted.event';
import { LocationDeletedHandler } from './location-deleted/location-deleted.handler';
import { LocationUpdatedEvent } from './location-updated/location-updated.event';
import { LocationUpdatedHandler } from './location-updated/location-updated.handler';

export const LocationEvents = {
  LocationCreatedEvent,
  LocationUpdatedEvent,
  LocationDeletedEvent,
};

export const LocationEventHandlers = [LocationCreatedHandler, LocationUpdatedHandler, LocationDeletedHandler];
