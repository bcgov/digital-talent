import assert from 'assert';
import { BadRequestException } from '@nestjs/common';
import { ExistsState, InitialState } from '../../event-store/types/decider-state.type';
import { Decider } from '../../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../../event-store/utils/decide-update-event-data.util';
import { CreatePositionCommand } from './commands/create-position/create-position.command';
import { DeletePositionCommand } from './commands/delete-position/delete-position.command';
import { UpdatePositionCommand } from './commands/update-position/update-position.command';
import { PositionEntity } from './entities/position.entity';
import { PositionCreatedEvent } from './events/position-created/position-created.event';
import { PositionDeletedEvent } from './events/position-deleted/position-deleted.event';
import { PositionUpdatedEvent } from './events/position-updated/position-updated.event';
import { CreatePositionInput } from './inputs/create-position.input';
import { UpdatePositionInput } from './inputs/update-position.input';

export type State = InitialState | ExistsState<'position', PositionEntity>;
type Command = CreatePositionCommand | UpdatePositionCommand | DeletePositionCommand;
type Event = PositionCreatedEvent | PositionUpdatedEvent | PositionDeletedEvent;

const initialState: State = { exists: false };

export function evolve(state: State, event: Event): State {
  switch (event.type) {
    case 'PositionCreatedEvent': {
      assert(state.exists === false);

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'position',
        data: {
          ...data,
          created_at: new Date(metadata.created_at),
        },
      };
    }
    case 'PositionUpdatedEvent': {
      assert(state.exists === true);
      assert(state.type === 'position');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'position',
        data: {
          ...state.data,
          ...data,
          updated_at: new Date(metadata.created_at),
        },
      };
    }
    case 'PositionDeletedEvent': {
      assert(state.exists === true);
      assert(state.type === 'position');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'position',
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
    case 'CreatePositionCommand': {
      if (state.exists) throw new BadRequestException('Position already exists');

      const data: CreatePositionInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new PositionCreatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'UpdatePositionCommand': {
      if (!state.exists) throw new BadRequestException("Position doesn't exist");
      assert(state.type === 'position');

      const data: UpdatePositionInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new PositionUpdatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'DeletePositionCommand': {
      if (!state.exists) throw new BadRequestException("Position doesn't exist");
      assert(state.type === 'position');

      if (state.data.deleted_at != null) return [];

      return [new PositionDeletedEvent(command.data, { ...command.metadata, created_at: new Date().toISOString() })];
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
