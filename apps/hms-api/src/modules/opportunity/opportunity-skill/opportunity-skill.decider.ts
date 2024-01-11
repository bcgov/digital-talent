import { BadRequestException } from '@nestjs/common';
import { OpportunitySkill } from '../../../@generated/prisma-nestjs-graphql';
import { ExistsState, InitialState } from '../../event-store/types/decider-state.type';
import { Decider } from '../../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../../event-store/utils/decide-update-event-data.util';
import { CreateOpportunitySkillCommand } from './commands/create-opportunity-skill/create-opportunity-skill.command';
import { DeleteOpportunitySkillCommand } from './commands/delete-opportunity-skill/delete-opportunity-skill.command';
import { OpportunitySkillCreatedEvent } from './events/opportunity-skill-created/opportunity-skill-created.event';
import { OpportunitySkillDeletedEvent } from './events/opportunity-skill-deleted/opportunity-skill-deleted.event';
import { CreateOpportunitySkillInput } from './inputs/create-opportunity-skill.input';

export type OpportunitySkillState = InitialState | ExistsState<'opportunity-skill', OpportunitySkill>;
export type OpportunitySkillCommand = CreateOpportunitySkillCommand | DeleteOpportunitySkillCommand;
export type OpportunitySkillEvent = OpportunitySkillCreatedEvent | OpportunitySkillDeletedEvent;

export const initialState: OpportunitySkillState = { exists: false };

export function evolve(state: OpportunitySkillState, event: OpportunitySkillEvent): OpportunitySkillState {
  switch (event.type) {
    case 'OpportunitySkillCreatedEvent': {
      const { data, metadata } = event;
      return {
        exists: true,
        type: 'opportunity-skill',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          created_at: new Date(state.exists === false ? metadata.created_at : state.data.created_at),
        },
      };
    }
    case 'OpportunitySkillDeletedEvent': {
      const { metadata } = event;

      return {
        exists: true,
        type: 'opportunity-skill',
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

export function decide(state: OpportunitySkillState, command: OpportunitySkillCommand): OpportunitySkillEvent[] {
  switch (command.type) {
    case 'CreateOpportunitySkillCommand': {
      if (state.exists) throw new BadRequestException('OpportunitySkill already exists');

      const data: CreateOpportunitySkillInput = decideUpdateEventData(command, state);

      if (data == null) return [];

      return [
        new OpportunitySkillCreatedEvent(data, {
          ...command.metadata,
          created_at: new Date().toISOString(),
        }),
      ];
    }
    case 'DeleteOpportunitySkillCommand': {
      if (!state.exists) throw new BadRequestException('OpportunitySkill does not exist');

      if (state.data.deleted_at != null) return [];

      return [
        new OpportunitySkillDeletedEvent(command.data, { ...command.metadata, created_at: new Date().toISOString() }),
      ];
    }
    default: {
      return [];
    }
  }
}

export const decider: Decider<OpportunitySkillState, OpportunitySkillEvent, OpportunitySkillCommand> = {
  initialState,
  evolve,
  decide,
};
