import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { Decider } from '../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../event-store/utils/decide-update-event-data.util';
import { SyncMinistryCommand } from './commands/sync-ministry/sync-ministry.command';
import { MinistryEntity } from './entities/ministry.entity';
import { MinistrySyncedEvent } from './events/ministry-synced/ministry-synced.event';
import { SyncMinistryInput } from './inputs/sync-ministry.input';

export type MinistryState = InitialState | ExistsState<MinistryEntity>;
export type MinistryCommand = SyncMinistryCommand;
export type MinistryEvent = MinistrySyncedEvent;

export const initialState: MinistryState = { exists: false };

export function evolve(state: MinistryState, event: MinistryEvent): MinistryState {
  switch (event.type) {
    case 'MinistrySyncedEvent': {
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

export function decide(state: MinistryState, command: MinistryCommand): MinistryEvent[] {
  switch (command.type) {
    case 'SyncMinistryCommand': {
      const data: SyncMinistryInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [
        new MinistrySyncedEvent(data, {
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

export const decider: Decider<MinistryState, MinistryEvent, MinistryCommand> = {
  initialState,
  evolve,
  decide,
};
