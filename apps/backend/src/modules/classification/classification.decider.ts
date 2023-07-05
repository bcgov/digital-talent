import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { Decider } from '../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../event-store/utils/decide-update-event-data.util';
import { SyncClassificationCommand } from './commands/sync-classification/sync-classification.command';
import { ClassificationEntity } from './entities/classification.entity';
import { ClassificationSyncedEvent } from './events/classification-synced/classification-synced.event';
import { SyncClassificationInput } from './inputs/sync-classification.input';

export type ClassificationState = InitialState | ExistsState<ClassificationEntity>;
export type ClassificationCommand = SyncClassificationCommand;
export type ClassificationEvent = ClassificationSyncedEvent;

export const initialState: ClassificationState = { exists: false };

export function evolve(state: ClassificationState, event: ClassificationEvent): ClassificationState {
  switch (event.type) {
    case 'ClassificationSyncedEvent': {
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
    case 'SyncClassificationCommand': {
      const data: SyncClassificationInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [
        new ClassificationSyncedEvent(data, {
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
