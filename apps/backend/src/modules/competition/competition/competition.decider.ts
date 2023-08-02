import { BadRequestException } from '@nestjs/common';
import { CompetitionState } from '@prisma/client';
import assert from 'assert';
import { ExistsState, InitialState } from '../../event-store/types/decider-state.type';
import { Decider } from '../../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../../event-store/utils/decide-update-event-data.util';
import { CreateCompetitionCommand } from './commands/create-competition/create-competition.command';
import { DeleteCompetitionCommand } from './commands/delete-competition/delete-competition.command';
import { UpdateCompetitionCommand } from './commands/update-competition/update-competition.command';
import { CompetitionWriteEntity } from './entities/competition-write.entity';
import { CompetitionCreatedEvent } from './events/competition-created/competition-created.event';
import { CompetitionDeletedEvent } from './events/competition-deleted/competition-deleted.event';
import { CompetitionUpdatedEvent } from './events/competition-updated/competition-updated.event';
import { CreateCompetitionInput } from './inputs/create-competition.input';
import { UpdateCompetitionInput } from './inputs/update-competition.input';

type State = InitialState | ExistsState<'competition', CompetitionWriteEntity>;
type Command = CreateCompetitionCommand | UpdateCompetitionCommand | DeleteCompetitionCommand;
type Event = CompetitionCreatedEvent | CompetitionUpdatedEvent | CompetitionDeletedEvent;

export const initialState: State = { exists: false };

export function evolve(state: State, event: Event): State {
  switch (event.type) {
    case 'CompetitionCreatedEvent': {
      assert(state.exists === false);

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'competition',
        data: {
          ...data,
          state: CompetitionState.DRAFT,
          created_at: new Date(metadata.created_at),
        },
      };
    }
    case 'CompetitionUpdatedEvent': {
      assert(state.exists === true);
      assert(state.type === 'competition');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'competition',
        data: {
          ...state.data,
          ...data,
          updated_at: new Date(metadata.created_at),
        },
      };
    }
    case 'CompetitionDeletedEvent': {
      assert(state.exists === true);
      assert(state.type === 'competition');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'competition',
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
    case 'CreateCompetitionCommand': {
      if (state.exists) throw new BadRequestException('Competition already exists');

      const data: CreateCompetitionInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new CompetitionCreatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'UpdateCompetitionCommand': {
      if (!state.exists) throw new BadRequestException("Competition doesn't exist");
      assert(state.type === 'competition');

      const data: UpdateCompetitionInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new CompetitionUpdatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'DeleteCompetitionCommand': {
      if (!state.exists) throw new BadRequestException("Competition doesn't exist");
      assert(state.type === 'competition');

      if (state.data.deleted_at != null) return [];

      return [new CompetitionDeletedEvent(command.data, { ...command.metadata, created_at: new Date().toISOString() })];
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
