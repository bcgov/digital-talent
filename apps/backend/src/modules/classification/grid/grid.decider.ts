import { BadRequestException } from '@nestjs/common';
import assert from 'assert';
import { ExistsState, InitialState } from '../../event-store/types/decider-state.type';
import { Decider } from '../../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../../event-store/utils/decide-update-event-data.util';
import { CreateGridCommand } from './commands/create-grid/create-grid.command';
import { DeleteGridCommand } from './commands/delete-grid/delete-grid.command';
import { UpdateGridCommand } from './commands/update-grid/update-grid.command';
import { GridEntity } from './entities/grid.entity';
import { GridCreatedEvent } from './events/grid-created/grid-created.event';
import { GridDeletedEvent } from './events/grid-deleted/grid-deleted.event';
import { GridUpdatedEvent } from './events/grid-updated/grid-updated.event';
import { CreateGridInput } from './inputs/create-grid.input';
import { UpdateGridInput } from './inputs/update-grid.input';

type GridState = ExistsState<'grid', GridEntity>;

export type ClassificationState = InitialState | GridState;
export type ClassificationCommand = CreateGridCommand | UpdateGridCommand | DeleteGridCommand;
export type ClassificationEvent = GridCreatedEvent | GridUpdatedEvent | GridDeletedEvent;

export const initialState: ClassificationState = { exists: false };

export function evolve(state: ClassificationState, event: ClassificationEvent): ClassificationState {
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
        },
      } as GridState;
    }
    case 'GridUpdatedEvent': {
      assert(state.exists === true);
      assert(state.type === 'grid');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'grid',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          updated_at: new Date(metadata.created_at),
        },
      } as GridState;
    }
    case 'GridDeletedEvent': {
      assert(state.exists === true);
      assert(state.type === 'grid');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'grid',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          deleted_at: new Date(metadata.created_at),
        },
      } as GridState;
    }

    default: {
      return { exists: false };
    }
  }
}

export function decide(state: ClassificationState, command: ClassificationCommand): ClassificationEvent[] {
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

export const decider: Decider<ClassificationState, ClassificationEvent, ClassificationCommand> = {
  initialState,
  evolve,
  decide,
};
