import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { Decider } from '../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../event-store/utils/decide-update-event-data.util';
import { SyncSkillCommand } from './commands/sync-skill/sync-skill.command';
import { SkillEntity } from './entities/skill.entity';
import { SkillSyncedEvent } from './events/skill-synced/skill-synced.event';
import { SyncSkillInput } from './inputs/sync-skill.input';

export type SkillState = InitialState | ExistsState<SkillEntity>;
export type SkillCommand = SyncSkillCommand;
export type SkillEvent = SkillSyncedEvent;

export const initialState: SkillState = { exists: false };

export function evolve(state: SkillState, event: SkillEvent): SkillState {
  switch (event.type) {
    case 'SkillSyncedEvent': {
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

export function decide(state: SkillState, command: SkillCommand): SkillEvent[] {
  switch (command.type) {
    case 'SyncSkillCommand': {
      const data: SyncSkillInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [
        new SkillSyncedEvent(data, {
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

export const decider: Decider<SkillState, SkillEvent, SkillCommand> = {
  initialState,
  evolve,
  decide,
};
