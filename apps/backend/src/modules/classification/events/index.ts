import { ClassificationSyncedEvent } from './classification-synced/classification-synced.event';
import { ClassificationSyncedHandler } from './classification-synced/classification-synced.handler';

export const Events = {
  ClassificationSyncedEvent,
};

export const EventHandlers = [ClassificationSyncedHandler];
