import { SyncCityHandler } from './sync-city/sync-city.handler';
import { SyncCountryHandler } from './sync-country/sync-country.handler';
import { SyncProvinceHandler } from './sync-province/sync-province.handler';
import { SyncRegionHandler } from './sync-region/sync-region.handler';

export const CommandHandlers = [SyncCityHandler, SyncCountryHandler, SyncProvinceHandler, SyncRegionHandler];
