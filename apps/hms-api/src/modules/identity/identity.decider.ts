import assert from 'assert';
import { BadRequestException } from '@nestjs/common';
import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { Decider } from '../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../event-store/utils/decide-update-event-data.util';
import { CreateIdentityCommand } from './commands/create-identity/create-identity.command';
import { DeleteIdentityCommand } from './commands/delete-identity/delete-identity.command';
import { IdentityWriteEntity } from './entities/identity-write.entity';
import { IdentityCreatedEvent } from './events/identity-created/identity-created.event';
import { IdentityDeletedEvent } from './events/identity-deleted/identity-deleted.event';
import { CreateIdentityInput } from './inputs/create-identity.input';

type State = InitialState | ExistsState<'identity', IdentityWriteEntity>;
type Command = CreateIdentityCommand | DeleteIdentityCommand;
type Event = IdentityCreatedEvent | IdentityDeletedEvent;

const initialState: State = { exists: false };

export function evolve(state: State, event: Event): State {
  switch (event.type) {
    case 'IdentityCreatedEvent': {
      assert(state.exists === false);

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'identity',
        data: {
          ...data,
          created_at: new Date(metadata.created_at),
        },
      };
    }
    case 'IdentityDeletedEvent': {
      assert(state.exists === true);
      assert(state.type === 'identity');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'identity',
        data: {
          ...state.data,
          ...data,
          deleted_at: new Date(metadata.created_at),
        },
      };
    }
    default: {
      return { exists: false };
    }
  }
}

export function decide(state: State, command: Command): Event[] {
  switch (command.type) {
    case 'CreateIdentityCommand': {
      if (state.exists) throw new BadRequestException('Identity already exists');

      const data: CreateIdentityInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new IdentityCreatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'DeleteIdentityCommand': {
      if (!state.exists) throw new BadRequestException("Identity doesn't exist");
      assert(state.type === 'identity');

      if (state.data.deleted_at != null) return [];

      return [new IdentityDeletedEvent(command.data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    default: {
      return [];
    }
  }
}

export const decider: Decider<State, Event, Command> = {
  initialState,
  evolve,
  decide,
};
