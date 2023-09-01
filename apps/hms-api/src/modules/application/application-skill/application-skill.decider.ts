import { BadRequestException } from '@nestjs/common';
import { ExistsState, InitialState } from '../../event-store/types/decider-state.type';
import { Decider } from '../../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../../event-store/utils/decide-update-event-data.util';
import { CreateApplicationSkillCommand } from './commands/create-application-skill/create-application-skill.command';
import { DeleteApplicationSkillCommand } from './commands/delete-application-skill/delete-application-skill.command';
import { UpdateApplicationSkillCommand } from './commands/update-application-skill/update-application-skill.command';
import { ApplicationSkillEntity } from './entities/application-skill.entity';
import { ApplicationSkillCreatedEvent } from './events/application-skill-created/application-skill-created.event';
import { ApplicationSkillDeletedEvent } from './events/application-skill-deleted/application-skill-deleted.event';
import { ApplicationSkillUpdatedEvent } from './events/application-skill-updated/application-skill-updated.event';
import { CreateApplicationSkillInput } from './inputs/create-application-skill.input';
import { UpdateApplicationSkillInput } from './inputs/update-application-skill.input';

export type ApplicationSkillState = InitialState | ExistsState<'application-skill', ApplicationSkillEntity>;
export type ApplicationSkillCommand =
  | CreateApplicationSkillCommand
  | UpdateApplicationSkillCommand
  | DeleteApplicationSkillCommand;
export type ApplicationSkillEvent =
  | ApplicationSkillCreatedEvent
  | ApplicationSkillUpdatedEvent
  | ApplicationSkillDeletedEvent;

export const initialState: ApplicationSkillState = { exists: false };

export function evolve(state: ApplicationSkillState, event: ApplicationSkillEvent): ApplicationSkillState {
  switch (event.type) {
    case 'ApplicationSkillCreatedEvent': {
      const { data, metadata } = event;
      return {
        exists: true,
        type: 'application-skill',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          created_at: new Date(state.exists === false ? metadata.created_at : state.data.created_at),
        },
      };
    }
    case 'ApplicationSkillUpdatedEvent': {
      const { data, metadata } = event;

      return {
        exists: true,
        type: 'application-skill',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          updated_at: new Date(metadata.created_at as string),
        },
      };
    }
    case 'ApplicationSkillDeletedEvent': {
      const { metadata } = event;

      return {
        exists: true,
        type: 'application-skill',
        data: {
          ...(state.exists === true && { ...state.data }),
          deleted_at: new Date(metadata.created_at),
        },
      };
    }
    default: {
      return { exists: false };
    }
  }
}

export function decide(state: ApplicationSkillState, command: ApplicationSkillCommand): ApplicationSkillEvent[] {
  switch (command.type) {
    case 'CreateApplicationSkillCommand': {
      if (state.exists) throw new BadRequestException('ApplicationSkill already exists');

      const data: CreateApplicationSkillInput = decideUpdateEventData(command, state);

      if (data == null) return [];

      return [
        new ApplicationSkillCreatedEvent(data, {
          ...command.metadata,
          created_at: new Date().toISOString(),
        }),
      ];
    }
    case 'UpdateApplicationSkillCommand': {
      if (!state.exists) throw new BadRequestException('ApplicationSkill does not exist');
      const data: UpdateApplicationSkillInput = decideUpdateEventData(command, state);

      if (data == null) return [];
      return [
        new ApplicationSkillUpdatedEvent(data, {
          ...command.metadata,
          updated_at: new Date().toISOString(),
        }),
      ];
    }
    case 'DeleteApplicationSkillCommand': {
      if (!state.exists) throw new BadRequestException('ApplicationSkill does not exist');

      if (state.data.deleted_at != null) return [];

      return [
        new ApplicationSkillDeletedEvent(command.data, { ...command.metadata, created_at: new Date().toISOString() }),
      ];
    }
    default: {
      return [];
    }
  }
}

export const decider: Decider<ApplicationSkillState, ApplicationSkillEvent, ApplicationSkillCommand> = {
  initialState,
  evolve,
  decide,
};
