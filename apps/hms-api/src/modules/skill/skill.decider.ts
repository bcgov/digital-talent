import assert from 'assert';
import { BadRequestException } from '@nestjs/common';
import { Skill } from '../../@generated/prisma-nestjs-graphql';
import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { Decider } from '../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../event-store/utils/decide-update-event-data.util';
import { CreateSkillCommand } from './commands/create-skill/create-skill.command';
import { DeleteSkillCommand } from './commands/delete-skill/delete-skill.command';
import { UpdateSkillCommand } from './commands/update-skill/update-skill.command';
import { SkillCreatedEvent } from './events/skill-created/skill-created.event';
import { SkillDeletedEvent } from './events/skill-deleted/skill-deleted.event';
import { SkillUpdatedEvent } from './events/skill-updated/skill-updated.event';
import { CreateSkillInput } from './inputs/create-skill.input';
import { UpdateSkillInput } from './inputs/update-skill.input';

type State = InitialState | ExistsState<'skill', Skill>;
type Command = CreateSkillCommand | UpdateSkillCommand | DeleteSkillCommand;
type Event = SkillCreatedEvent | SkillUpdatedEvent | SkillDeletedEvent;

const initialState: State = { exists: false };

export function evolve(state: State, event: Event): State {
  switch (event.type) {
    case 'SkillCreatedEvent': {
      assert(state.exists === false);

      const {
        data: { description, ...data },
        metadata,
      } = event;

      return {
        exists: true,
        type: 'skill',
        data: {
          ...data,
          description,
          created_at: new Date(metadata.created_at),
          updated_at: null,
          deleted_at: null,
        },
      };
    }
    case 'SkillUpdatedEvent': {
      assert(state.exists === true);
      assert(state.type === 'skill');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'skill',
        data: {
          ...state.data,
          ...data,
          updated_at: new Date(metadata.created_at),
        },
      };
    }
    case 'SkillDeletedEvent': {
      assert(state.exists === true);
      assert(state.type === 'skill');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'skill',
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
    case 'CreateSkillCommand': {
      if (state.exists) throw new BadRequestException('Skill already exists');

      const data: CreateSkillInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new SkillCreatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'UpdateSkillCommand': {
      if (!state.exists) throw new BadRequestException("Skill doesn't exist");
      assert(state.type === 'skill');

      const data: UpdateSkillInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new SkillUpdatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'DeleteSkillCommand': {
      if (!state.exists) throw new BadRequestException("Skill doesn't exist");
      assert(state.type === 'skill');

      if (state.data.deleted_at != null) return [];

      return [new SkillDeletedEvent(command.data, { ...command.metadata, created_at: new Date().toISOString() })];
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
