import assert from 'assert';
import { ExistsState, InitialState } from '../../event-store/types/decider-state.type';
import { Decider } from '../../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../../event-store/utils/decide-update-event-data.util';
import { AddCompetitionSkillCommand } from './commands/add-competition-skill/add-competition-skill.command';
import { RemoveCompetitionSkillCommand } from './commands/remove-competition-skill/remove-competition-skill.command';
import { CompetitionSkillCommandEntity } from './entities/competition-skill-command.entity';
import { CompetitionSkillAddedEvent } from './events/competition-skill-added/competition-skill-added.event';
import { CompetitionSkillRemovedEvent } from './events/competition-skill-removed/competition-skill-removed.event';
import { AddCompetitionSkillInput } from './inputs/add-competition-skill.input';

export type State = InitialState | ExistsState<'competition-skill', CompetitionSkillCommandEntity>;
type Command = AddCompetitionSkillCommand | RemoveCompetitionSkillCommand;
type Event = CompetitionSkillAddedEvent | CompetitionSkillRemovedEvent;

export const initialState: State = { exists: false };

export function evolve(state: State, event: Event): State {
  switch (event.type) {
    case 'CompetitionSkillAddedEvent': {
      const { data, metadata } = event;

      return {
        exists: true,
        type: 'competition-skill',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          ...(state.exists === false
            ? { created_at: new Date(metadata.created_at) }
            : { updated_At: new Date(metadata.created_at), deleted_at: null }),
        },
      };
    }
    case 'CompetitionSkillRemovedEvent': {
      assert(state.exists === true);
      assert(state.type === 'competition-skill');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'competition-skill',
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
    case 'AddCompetitionSkillCommand': {
      assert(state.exists === false, 'The Competition Skill already exist');
      const data: AddCompetitionSkillInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new CompetitionSkillAddedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'RemoveCompetitionSkillCommand': {
      assert(state.exists === true, "The Competition Skill doesn't exist");
      assert(state.type === 'competition-skill');

      if (state.data.deleted_at != null) return [];

      return [
        new CompetitionSkillRemovedEvent(command.data, { ...command.metadata, created_at: new Date().toISOString() }),
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
