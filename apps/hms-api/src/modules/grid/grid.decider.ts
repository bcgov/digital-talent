import assert from 'assert';
import { BadRequestException } from '@nestjs/common';
import { Grid } from '../../@generated/prisma-nestjs-graphql';
import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { Decider } from '../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../event-store/utils/decide-update-event-data.util';
import { CreateGridCommand } from './commands/create-grid/create-grid.command';
import { DeleteGridCommand } from './commands/delete-grid/delete-grid.command';
import { UpdateGridCommand } from './commands/update-grid/update-grid.command';
import { GridCreatedEvent } from './events/grid-created/grid-created.event';
import { GridDeletedEvent } from './events/grid-deleted/grid-deleted.event';
import { GridUpdatedEvent } from './events/grid-updated/grid-updated.event';
import { CreateGridInput } from './inputs/create-grid.input';
import { UpdateGridInput } from './inputs/update-grid.input';

export type State = InitialState | ExistsState<'grid', Grid>;
type Command = CreateGridCommand | UpdateGridCommand | DeleteGridCommand;
type Event = GridCreatedEvent | GridUpdatedEvent | GridDeletedEvent;

const initialState: State = { exists: false };

export function evolve(state: State, event: Event): State {
  switch (event.type) {
    case 'GridCreatedEvent': {
      assert(state.exists === false);

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'grid',
        data: {
          ...data,
          created_at: new Date(metadata.created_at),
          updated_at: null,
          deleted_at: null,
        },
      };
    }
    case 'GridUpdatedEvent': {
      assert(state.exists === true);
      assert(state.type === 'grid');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'grid',
        data: {
          ...state.data,
          ...data,
          updated_at: new Date(metadata.created_at),
        },
      };
    }
    case 'GridDeletedEvent': {
      assert(state.exists === true);
      assert(state.type === 'grid');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'grid',
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
    case 'CreateGridCommand': {
      if (state.exists) throw new BadRequestException('Grid already exists');

      const data: CreateGridInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new GridCreatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'UpdateGridCommand': {
      if (!state.exists) throw new BadRequestException("Grid doesn't exist");
      assert(state.type === 'grid');

      const data: UpdateGridInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new GridUpdatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'DeleteGridCommand': {
      if (!state.exists) throw new BadRequestException("Grid doesn't exist");
      assert(state.type === 'grid');

      if (state.data.deleted_at != null) return [];

      return [new GridDeletedEvent(command.data, { ...command.metadata, created_at: new Date().toISOString() })];
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
