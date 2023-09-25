import assert from 'assert';
import { BadRequestException } from '@nestjs/common';
import { OpportunityState } from '../../../@generated/prisma-nestjs-graphql';
import { ExistsState, InitialState } from '../../event-store/types/decider-state.type';
import { Decider } from '../../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../../event-store/utils/decide-update-event-data.util';
import { CreateOpportunityCommand } from './commands/create-opportunity/create-opportunity.command';
import { DeleteOpportunityCommand } from './commands/delete-opportunity/delete-opportunity.command';
import { UpdateOpportunityStateCommand } from './commands/update-opportunity-state/update-opportunity-state.command';
import { UpdateOpportunityCommand } from './commands/update-opportunity/update-opportunity.command';
import { OpportunityEntity } from './entities/opportunity.entity';
import { OpportunityCreatedEvent } from './events/opportunity-created/opportunity-created.event';
import { OpportunityDeletedEvent } from './events/opportunity-deleted/opportunity-deleted.event';
import { OpportunityStateUpdatedEvent } from './events/opportunity-state-updated/opportunity-state-updated.event';
import { OpportunityUpdatedEvent } from './events/opportunity-updated/opportunity-updated.event';
import { CreateOpportunityInput } from './inputs/create-opportunity.input';
import { UpdateOpportunityStateInput } from './inputs/update-opportunity-state.input';
import { UpdateOpportunityInput } from './inputs/update-opportunity.input';
import { opportunityStateMachine } from './state-machines/opportunity-state.state-machine';

export type State = InitialState | ExistsState<'opportunity', OpportunityEntity>;
type Command =
  | CreateOpportunityCommand
  | UpdateOpportunityCommand
  | UpdateOpportunityStateCommand
  | DeleteOpportunityCommand;
type Event = OpportunityCreatedEvent | OpportunityUpdatedEvent | OpportunityStateUpdatedEvent | OpportunityDeletedEvent;

export const initialState: State = { exists: false };

export function evolve(state: State, event: Event): State {
  switch (event.type) {
    case 'OpportunityCreatedEvent': {
      assert(state.exists === false);

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'opportunity',
        data: {
          ...data,
          state: OpportunityState.SUBMITTED,
          created_at: new Date(metadata.created_at),
        },
      };
    }
    case 'OpportunityUpdatedEvent': {
      assert(state.exists === true);
      assert(state.type === 'opportunity');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'opportunity',
        data: {
          ...state.data,
          ...data,
          updated_at: new Date(metadata.created_at),
        },
      };
    }
    case 'OpportunityStateUpdatedEvent': {
      assert(state.exists === true);
      assert(state.type === 'opportunity');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'opportunity',
        data: {
          ...state.data,
          ...data,
          updated_at: new Date(metadata.created_at),
        },
      };
    }
    case 'OpportunityDeletedEvent': {
      assert(state.exists === true);
      assert(state.type === 'opportunity');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'opportunity',
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
    case 'CreateOpportunityCommand': {
      if (state.exists) throw new BadRequestException('Opportunity already exists');

      const data: CreateOpportunityInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new OpportunityCreatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'UpdateOpportunityCommand': {
      if (!state.exists) throw new BadRequestException("Opportunity doesn't exist");
      assert(state.type === 'opportunity');
      assert(state.data.state === 'SUBMITTED', 'Opportunitys can only be updated in `SUBMITTED` state.');

      const data: UpdateOpportunityInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new OpportunityUpdatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'UpdateOpportunityStateCommand': {
      if (!state.exists) throw new BadRequestException("Opportunity doesn't exist");
      assert(state.type === 'opportunity');

      const data: UpdateOpportunityStateInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      const { changed } = opportunityStateMachine.transition(state.data.state, { type: data.state });
      if (changed === false)
        throw new BadRequestException(`Invalid state transition ${state.data.state} => ${data.state}`);

      return [new OpportunityStateUpdatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'DeleteOpportunityCommand': {
      if (!state.exists) throw new BadRequestException("Opportunity doesn't exist");
      assert(state.type === 'opportunity');

      if (state.data.deleted_at != null) return [];

      return [new OpportunityDeletedEvent(command.data, { ...command.metadata, created_at: new Date().toISOString() })];
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
