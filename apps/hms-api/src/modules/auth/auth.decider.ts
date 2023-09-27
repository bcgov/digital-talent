import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { Decider } from '../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../event-store/utils/decide-update-event-data.util';
import { SyncAccountCommand } from './commands/sync-account/sync-account.command';
import { SyncAccountDto } from './dtos/sync-account.dto';
import { AccountSyncedEvent } from './events/account-synced/account-synced.event';
import { Account } from './models/account.model';

export type AuthState = InitialState | ExistsState<'account', Account>;
export type AuthCommand = SyncAccountCommand;
export type AuthEvent = AccountSyncedEvent;

export const initialState: AuthState = { exists: false };

export function evolve(state: AuthState, event: AuthEvent): AuthState {
  switch (event.type) {
    case 'AccountSyncedEvent': {
      const { data, metadata } = event;

      return {
        exists: true,
        type: 'account',
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

export function decide(state: AuthState, command: AuthCommand): AuthEvent[] {
  switch (command.type) {
    case 'SyncAccountCommand': {
      const data: SyncAccountDto = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new AccountSyncedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    default: {
      return [];
    }
  }
}

export const decider: Decider<AuthState, AuthEvent, AuthCommand> = {
  initialState,
  evolve,
  decide,
};
