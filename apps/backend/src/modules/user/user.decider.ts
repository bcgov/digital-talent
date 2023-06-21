import { Decider } from '../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../event-store/utils/decide-update-event-data.util';
import { SyncUserCommand } from './commands/sync-user/sync-user.command';
import { UserEntity } from './entities/user.entity';
import { UserSyncedEvent } from './events/user-synced/user-synced.event';
import { SyncUserInput } from './inputs/sync-user.input';

type InitialState = { exists: false };
type ExistsState = { exists: true; data: UserEntity };
export type UserState = InitialState | ExistsState;

export type UserCommand = SyncUserCommand;
export type UserEvent = UserSyncedEvent;

export const initialState: UserState = { exists: false };

export function evolve(state: UserState, event: UserEvent): UserState {
  switch (event.type) {
    case 'UserSyncedEvent': {
      const { data, metadata } = event;

      return {
        exists: true,
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          created_at: new Date(state.exists === false ? metadata.created_at : state.data.created_at),
          created_by: metadata.created_by,
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
