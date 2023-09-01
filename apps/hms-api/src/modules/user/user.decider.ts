import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { Decider } from '../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../event-store/utils/decide-update-event-data.util';
import { SyncUserCommand } from './commands/sync-user/sync-user.command';
import { UserSyncedEvent } from './events/user-synced/user-synced.event';
import { SyncUserInput } from './inputs/sync-user.input';
import { UserWriteModel } from './models/user-write.model';

export type UserState = InitialState | ExistsState<'user', UserWriteModel>;
export type UserCommand = SyncUserCommand;
export type UserEvent = UserSyncedEvent;

export const initialState: UserState = { exists: false };

export function evolve(state: UserState, event: UserEvent): UserState {
  switch (event.type) {
    case 'UserSyncedEvent': {
      const { data, metadata } = event;

      return {
        exists: true,
        type: 'user',
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

export function decide(state: UserState, command: UserCommand): UserEvent[] {
  switch (command.type) {
    case 'SyncUserCommand': {
      const data: SyncUserInput = decideUpdateEventData(command, state);

      if (data == null) return [];

      return [new UserSyncedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    default: {
      return [];
    }
  }
}

export const decider: Decider<UserState, UserEvent, UserCommand> = {
  initialState,
  evolve,
  decide,
};
