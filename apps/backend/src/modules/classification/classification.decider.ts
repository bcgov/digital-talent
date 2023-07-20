import { BadRequestException } from '@nestjs/common';
import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { Decider } from '../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../event-store/utils/decide-update-event-data.util';
import { CreateGridCommand } from './commands/create-grid/create-grid.command';
import { GridEntity } from './entities/grid.entity';
import { GridCreatedEvent } from './events/grid-created/grid-created.event';
import { CreateGridInput } from './inputs/grid.input';

export type ClassificationState = InitialState | ExistsState<GridEntity>;
export type ClassificationCommand = CreateGridCommand;
export type ClassificationEvent = GridCreatedEvent;

export const initialState: ClassificationState = { exists: false };

export function evolve(state: ClassificationState, event: ClassificationEvent): ClassificationState {
  switch (event.type) {
    case 'GridCreatedEvent': {
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

export function decide(state: ClassificationState, command: ClassificationCommand): ClassificationEvent[] {
  switch (command.type) {
    case 'CreateGridCommand': {
      if (state.exists) throw new BadRequestException('Grid already exists');

      const data: CreateGridInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [
        new GridCreatedEvent(data, {
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

export const decider: Decider<ClassificationState, ClassificationEvent, ClassificationCommand> = {
  initialState,
  evolve,
  decide,
};
