import { CitySyncedEvent } from './city-synced/city-synced.event';
import { CitySyncedHandler } from './city-synced/city-synced.handler';
import { CountrySyncedEvent } from './country-synced/country-synced.event';
import { CountrySyncedHandler } from './country-synced/country-synced.handler';
import { ProvinceSyncedEvent } from './province-synced/province-synced.event';
import { ProvinceSyncedHandler } from './province-synced/province-synced.handler';
import { RegionSyncedEvent } from './region-synced/region-synced.event';
import { RegionSyncedHandler } from './region-synced/region-synced.handler';

export const Events = {
  CitySyncedEvent,
  CountrySyncedEvent,
  ProvinceSyncedEvent,
  RegionSyncedEvent,
};

export const EventHandlers = [CitySyncedHandler, CountrySyncedHandler, ProvinceSyncedHandler, RegionSyncedHandler];
