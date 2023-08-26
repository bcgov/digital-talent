import { BadRequestException } from '@nestjs/common';
import assert from 'assert';
import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { Decider } from '../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../event-store/utils/decide-update-event-data.util';
import { CreateMinistryCommand } from './commands/create-ministry/create-ministry.command';
import { DeleteMinistryCommand } from './commands/delete-ministry/delete-ministry.command';
import { UpdateMinistryCommand } from './commands/update-ministry/update-ministry.command';
import { MinistryWriteEntity } from './entities/ministry.write.entity';
import { MinistryCreatedEvent } from './events/ministry-created/ministry-created.event';
import { MinistryDeletedEvent } from './events/ministry-deleted/ministry-deleted.event';
import { MinistryUpdatedEvent } from './events/ministry-updated/ministry-updated.event';
import { CreateMinistryInput } from './inputs/create-ministry.input';
import { UpdateMinistryInput } from './inputs/update-ministry.input';

type State = InitialState | ExistsState<'ministry', MinistryWriteEntity>;
type Command = CreateMinistryCommand | UpdateMinistryCommand | DeleteMinistryCommand;
type Event = MinistryCreatedEvent | MinistryUpdatedEvent | MinistryDeletedEvent;

const initialState: State = { exists: false };

export function evolve(state: State, event: Event): State {
  switch (event.type) {
    case 'MinistryCreatedEvent': {
      assert(state.exists === false);

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'ministry',
        data: {
          ...data,
          created_at: new Date(metadata.created_at),
        },
      };
    }
    case 'MinistryUpdatedEvent': {
      assert(state.exists === true);
      assert(state.type === 'ministry');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'ministry',
        data: {
          ...state.data,
          ...data,
          updated_at: new Date(metadata.created_at),
        },
      };
    }
    case 'MinistryDeletedEvent': {
      assert(state.exists === true);
      assert(state.type === 'ministry');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'ministry',
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
    case 'CreateMinistryCommand': {
      if (state.exists) throw new BadRequestException('Ministry already exists');

      const data: CreateMinistryInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new MinistryCreatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'UpdateMinistryCommand': {
      if (!state.exists) throw new BadRequestException("Ministry doesn't exist");
      assert(state.type === 'ministry');

      const data: UpdateMinistryInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new MinistryUpdatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'DeleteMinistryCommand': {
      if (!state.exists) throw new BadRequestException("Ministry doesn't exist");
      assert(state.type === 'ministry');

      if (state.data.deleted_at != null) return [];

      return [new MinistryDeletedEvent(command.data, { ...command.metadata, created_at: new Date().toISOString() })];
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
