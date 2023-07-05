import { MinistrySyncedEvent } from './ministry-synced/ministry-synced.event';
import { MinistrySyncedHandler } from './ministry-synced/ministry-synced.handler';

export const Events = {
  MinistrySyncedEvent,
};

export const EventHandlers = [MinistrySyncedHandler];
