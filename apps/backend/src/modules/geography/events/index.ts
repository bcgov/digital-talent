import { CountrySyncedEvent } from './country-synced/country-synced.event';
import { CountrySyncedHandler } from './country-synced/country-synced.handler';
import { ProvinceSyncedEvent } from './province-synced/province-synced.event';
import { ProvinceSyncedHandler } from './province-synced/province-synced.handler';

export const Events = {
  CountrySyncedEvent,
  ProvinceSyncedEvent,
};

export const EventHandlers = [CountrySyncedHandler, ProvinceSyncedHandler];
