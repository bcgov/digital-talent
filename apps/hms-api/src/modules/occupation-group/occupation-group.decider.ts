import assert from 'assert';
import { BadRequestException } from '@nestjs/common';
import { OccupationGroup } from '../../@generated/prisma-nestjs-graphql';
import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { Decider } from '../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../event-store/utils/decide-update-event-data.util';
import { CreateOccupationGroupCommand } from './commands/create-occupation-group/create-occupation-group.command';
import { DeleteOccupationGroupCommand } from './commands/delete-occupation-group/delete-occupation-group.command';
import { UpdateOccupationGroupCommand } from './commands/update-occupation-group/update-occupation-group.command';
import { OccupationGroupCreatedEvent } from './events/occupation-group-created/occupation-group-created.event';
import { OccupationGroupDeletedEvent } from './events/occupation-group-deleted/occupation-group-deleted.event';
import { OccupationGroupUpdatedEvent } from './events/occupation-group-updated/occupation-group-updated.event';
import { CreateOccupationGroupInput } from './inputs/create-occupation-group.input';
import { UpdateOccupationGroupInput } from './inputs/update-occupation-group.input';

export type State = InitialState | ExistsState<'occupation-group', OccupationGroup>;
type Command = CreateOccupationGroupCommand | UpdateOccupationGroupCommand | DeleteOccupationGroupCommand;
type Event = OccupationGroupCreatedEvent | OccupationGroupUpdatedEvent | OccupationGroupDeletedEvent;

export const initialState: State = { exists: false };

export function evolve(state: State, event: Event): State {
  switch (event.type) {
    case 'OccupationGroupCreatedEvent': {
      assert(state.exists === false);

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'occupation-group',
        data: {
          ...data,
          created_at: new Date(metadata.created_at),
          updated_at: null,
          deleted_at: null,
        },
      };
    }
    case 'OccupationGroupUpdatedEvent': {
      assert(state.exists === true);
      assert(state.type === 'occupation-group');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'occupation-group',
        data: {
          ...state.data,
          ...data,
          updated_at: new Date(metadata.created_at),
        },
      };
    }
    case 'OccupationGroupDeletedEvent': {
      assert(state.exists === true);
      assert(state.type === 'occupation-group');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'occupation-group',
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
    case 'CreateOccupationGroupCommand': {
      if (state.exists) throw new BadRequestException('Occupation Group already exists');

      const data: CreateOccupationGroupInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new OccupationGroupCreatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'UpdateOccupationGroupCommand': {
      if (!state.exists) throw new BadRequestException("Occupation Group doesn't exist");
      assert(state.type === 'occupation-group');

      const data: UpdateOccupationGroupInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new OccupationGroupUpdatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'DeleteOccupationGroupCommand': {
      if (!state.exists) throw new BadRequestException("Occupation Group doesn't exist");
      assert(state.type === 'occupation-group');

      if (state.data.deleted_at != null) return [];

      return [
        new OccupationGroupDeletedEvent(command.data, { ...command.metadata, created_at: new Date().toISOString() }),
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
