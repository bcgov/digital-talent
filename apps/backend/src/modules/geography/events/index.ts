import { CountrySyncedEvent } from './country-synced/country-synced.event';
import { CountrySyncedHandler } from './country-synced/country-synced.handler';

export const Events = {
  CountrySyncedEvent,
};

export const EventHandlers = [CountrySyncedHandler];
