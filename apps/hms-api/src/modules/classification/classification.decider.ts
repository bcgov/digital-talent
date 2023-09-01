import assert from 'assert';
import { BadRequestException } from '@nestjs/common';
import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { Decider } from '../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../event-store/utils/decide-update-event-data.util';
import { CreateClassificationCommand } from './commands/create-classification/create-classification.command';
import { DeleteClassificationCommand } from './commands/delete-classification/delete-classification.command';
import { UpdateClassificationCommand } from './commands/update-classification/update-classification.command';
import { ClassificationCreatedEvent } from './events/classification-created/classification-created.event';
import { ClassificationDeletedEvent } from './events/classification-deleted/classification-deleted.event';
import { ClassificationUpdatedEvent } from './events/classification-updated/classification-updated.event';
import { CreateClassificationInput } from './inputs/create-classification.input';
import { UpdateClassificationInput } from './inputs/update-classification.input';
import { ClassificationWriteModel } from './models/classification-write.model';

export type State = InitialState | ExistsState<'classification', ClassificationWriteModel>;
type Command = CreateClassificationCommand | UpdateClassificationCommand | DeleteClassificationCommand;
type Event = ClassificationCreatedEvent | ClassificationUpdatedEvent | ClassificationDeletedEvent;

export const initialState: State = { exists: false };

export function evolve(state: State, event: Event): State {
  switch (event.type) {
    case 'ClassificationCreatedEvent': {
      assert(state.exists === false);

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'classification',
        data: {
          ...data,
          created_at: new Date(metadata.created_at),
        },
      };
    }
    case 'ClassificationUpdatedEvent': {
      assert(state.exists === true);
      assert(state.type === 'classification');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'classification',
        data: {
          ...state.data,
          ...data,
          updated_at: new Date(metadata.created_at),
        },
      };
    }
    case 'ClassificationDeletedEvent': {
      assert(state.exists === true);
      assert(state.type === 'classification');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'classification',
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
    case 'CreateClassificationCommand': {
      assert(state.exists === false, new BadRequestException('Competition already exists'));

      const data: CreateClassificationInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new ClassificationCreatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'UpdateClassificationCommand': {
      assert(state.exists === true, new BadRequestException("Competition doesn't exist"));
      assert(state.type === 'classification');

      const data: UpdateClassificationInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new ClassificationUpdatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'DeleteClassificationCommand': {
      assert(state.exists === true, new BadRequestException("Competition doesn't exist"));
      assert(state.type === 'classification');

      return [
        new ClassificationDeletedEvent(command.data, { ...command.metadata, created_at: new Date().toISOString() }),
      ];
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
