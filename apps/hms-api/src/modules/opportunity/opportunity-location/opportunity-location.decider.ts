import { BadRequestException } from '@nestjs/common';
import { OpportunityLocation } from '../../../@generated/prisma-nestjs-graphql';
import { ExistsState, InitialState } from '../../event-store/types/decider-state.type';
import { Decider } from '../../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../../event-store/utils/decide-update-event-data.util';
import { CreateOpportunityLocationCommand } from './commands/create-opportunity-location/create-opportunity-location.command';
import { DeleteOpportunityLocationCommand } from './commands/delete-opportunity-location/delete-opportunity-location.command';
import { OpportunityLocationCreatedEvent } from './events/opportunity-location-created/opportunity-location-created.event';
import { OpportunityLocationDeletedEvent } from './events/opportunity-location-deleted/opportunity-location-deleted.event';
import { CreateOpportunityLocationInput } from './inputs/create-opportunity-location.input';

export type OpportunityLocationState = InitialState | ExistsState<'opportunity-location', OpportunityLocation>;
export type OpportunityLocationCommand = CreateOpportunityLocationCommand | DeleteOpportunityLocationCommand;
export type OpportunityLocationEvent = OpportunityLocationCreatedEvent | OpportunityLocationDeletedEvent;

export const initialState: OpportunityLocationState = { exists: false };

export function evolve(state: OpportunityLocationState, event: OpportunityLocationEvent): OpportunityLocationState {
  switch (event.type) {
    case 'OpportunityLocationCreatedEvent': {
      const { data, metadata } = event;
      return {
        exists: true,
        type: 'opportunity-location',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          created_at: new Date(state.exists === false ? metadata.created_at : state.data.created_at),
        },
      };
    }
    case 'OpportunityLocationDeletedEvent': {
      const { metadata } = event;

      return {
        exists: true,
        type: 'opportunity-location',
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

export function decide(
  state: OpportunityLocationState,
  command: OpportunityLocationCommand,
): OpportunityLocationEvent[] {
  switch (command.type) {
    case 'CreateOpportunityLocationCommand': {
      if (state.exists) throw new BadRequestException('OpportunityLocation already exists');

      const data: CreateOpportunityLocationInput = decideUpdateEventData(command, state);

      if (data == null) return [];

      return [
        new OpportunityLocationCreatedEvent(data, {
          ...command.metadata,
          created_at: new Date().toISOString(),
        }),
      ];
    }
    case 'DeleteOpportunityLocationCommand': {
      if (!state.exists) throw new BadRequestException('OpportunityLocation does not exist');

      if (state.data.deleted_at != null) return [];

      return [
        new OpportunityLocationDeletedEvent(command.data, {
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

export const decider: Decider<OpportunityLocationState, OpportunityLocationEvent, OpportunityLocationCommand> = {
  initialState,
  evolve,
  decide,
};
