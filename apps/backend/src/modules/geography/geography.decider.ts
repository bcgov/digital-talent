import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { Decider } from '../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../event-store/utils/decide-update-event-data.util';
import { SyncCountryCommand } from './commands/sync-country/sync-country.command';
import { SyncProvinceCommand } from './commands/sync-province/sync-province.command';
import { SyncRegionCommand } from './commands/sync-region/sync-region.command';
import { CountryEntity } from './entities/country.entity';
import { ProvinceEntity } from './entities/province.entity';
import { RegionEntity } from './entities/region.entity';
import { CountrySyncedEvent } from './events/country-synced/country-synced.event';
import { ProvinceSyncedEvent } from './events/province-synced/province-synced.event';
import { RegionSyncedEvent } from './events/region-synced/region-synced.event';
import { SyncCountryInput } from './inputs/sync-country.input';
import { SyncProvinceInput } from './inputs/sync-province.input';
import { SyncRegionInput } from './inputs/sync-region.input';

export type GeographyState = InitialState | ExistsState<CountryEntity | ProvinceEntity | RegionEntity>;
export type GeographyCommand = SyncCountryCommand | SyncProvinceCommand | SyncRegionCommand;
export type GeographyEvent = CountrySyncedEvent | ProvinceSyncedEvent | RegionSyncedEvent;

export const initialState: GeographyState = { exists: false };

export function evolve(state: GeographyState, event: GeographyEvent): GeographyState {
  switch (event.type) {
    case 'CountrySyncedEvent': {
      const { data, metadata } = event;

      return {
        exists: true,
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          created_at: new Date(state.exists === false ? metadata.created_at : state.data.created_at),
        },
      };
    }
    case 'ProvinceSyncedEvent': {
      const { data, metadata } = event;

      return {
        exists: true,
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          created_at: new Date(state.exists === false ? metadata.created_at : state.data.created_at),
        },
      };
    }
    case 'RegionSyncedEvent': {
      const { data, metadata } = event;

      return {
        exists: true,
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          created_at: new Date(state.exists === false ? metadata.created_at : state.data.created_at),
        },
      };
    }
    default: {
      return { exists: false };
    }
  }
}

export function decide(state: GeographyState, command: GeographyCommand): GeographyEvent[] {
  switch (command.type) {
    case 'SyncCountryCommand': {
      const data: SyncCountryInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [
        new CountrySyncedEvent(data, {
          ...command.metadata,
          created_at: new Date().toISOString(),
        }),
      ];
    }
    case 'SyncProvinceCommand': {
      const data: SyncProvinceInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [
        new ProvinceSyncedEvent(data, {
          ...command.metadata,
          created_at: new Date().toISOString(),
        }),
      ];
    }
    case 'SyncRegionCommand': {
      const data: SyncRegionInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [
        new RegionSyncedEvent(data, {
          ...command.metadata,
          created_at: new Date().toISOString(),
        }),
      ];
    }
    default: {
      return [];
    }
  }
}

export const decider: Decider<GeographyState, GeographyEvent, GeographyCommand> = {
  initialState,
  evolve,
  decide,
};
