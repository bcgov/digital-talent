import { BadRequestException } from '@nestjs/common';
import assert from 'assert';
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

type PositionState = ExistsState<'position', PositionEntity>;

export type ClassificationState = InitialState | PositionState;
export type ClassificationCommand = CreatePositionCommand | UpdatePositionCommand | DeletePositionCommand;
export type ClassificationEvent = PositionCreatedEvent | PositionUpdatedEvent | PositionDeletedEvent;

export const initialState: ClassificationState = { exists: false };

export function evolve(state: ClassificationState, event: ClassificationEvent): ClassificationState {
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
      } as PositionState;
    }
    case 'PositionUpdatedEvent': {
      assert(state.exists === true);
      assert(state.type === 'position');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'position',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          updated_at: new Date(metadata.created_at),
        },
      } as PositionState;
    }
    case 'PositionDeletedEvent': {
      assert(state.exists === true);
      assert(state.type === 'position');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'position',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          deleted_at: new Date(metadata.created_at),
        },
      } as PositionState;
    }
    default: {
      return { exists: false };
    }
  }
}

export function decide(state: ClassificationState, command: ClassificationCommand): ClassificationEvent[] {
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

export const decider: Decider<ClassificationState, ClassificationEvent, ClassificationCommand> = {
  initialState,
  evolve,
  decide,
};
