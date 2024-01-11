import { BadRequestException } from '@nestjs/common';
import { Elist } from '../../../@generated/prisma-nestjs-graphql';
import { ExistsState, InitialState } from '../../event-store/types/decider-state.type';
import { Decider } from '../../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../../event-store/utils/decide-update-event-data.util';
import { CreateElistCommand } from './commands/create-elist/create-elist.command';
import { DeleteElistCommand } from './commands/delete-elist/delete-elist.command';
import { UpdateElistCommand } from './commands/update-elist/update-elist.command';
import { ElistCreatedEvent } from './events/elist-created/elist-created.event';
import { ElistDeletedEvent } from './events/elist-deleted/elist-deleted.event';
import { ElistUpdatedEvent } from './events/elist-updated/elist-updated.event';
import { CreateElistInput } from './inputs/create-elist.input';
import { UpdateElistInput } from './inputs/update-elist.input';

export type ElistState = InitialState | ExistsState<'elist', Elist>;
export type ElistCommand = CreateElistCommand | UpdateElistCommand | DeleteElistCommand;
export type ElistEvent = ElistCreatedEvent | ElistUpdatedEvent | ElistDeletedEvent;

export const initialState: ElistState = { exists: false };

export function evolve(state: ElistState, event: ElistEvent): ElistState {
  switch (event.type) {
    case 'ElistCreatedEvent': {
      const { data, metadata } = event;
      return {
        exists: true,
        type: 'elist',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          created_at: new Date(state.exists === false ? metadata.created_at : state.data.created_at),
        },
      };
    }
    case 'ElistUpdatedEvent': {
      const { data, metadata } = event;

      return {
        exists: true,
        type: 'elist',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          updated_at: new Date(metadata.created_at as string),
        },
      };
    }
    case 'ElistDeletedEvent': {
      const { metadata } = event;

      return {
        exists: true,
        type: 'elist',
        data: {
          ...(state.exists === true && { ...state.data }),
          deleted_at: new Date(metadata.created_at as string),
        },
      };
    }
    default: {
      return { exists: false };
    }
  }
}

export function decide(state: ElistState, command: ElistCommand): ElistEvent[] {
  switch (command.type) {
    case 'CreateElistCommand': {
      if (state.exists) throw new BadRequestException('Elist already exists');

      const data: CreateElistInput = decideUpdateEventData(command, state);

      if (data == null) return [];

      return [
        new ElistCreatedEvent(data, {
          ...command.metadata,
          created_at: new Date().toISOString(),
        }),
      ];
    }
    case 'UpdateElistCommand': {
      if (!state.exists) throw new BadRequestException('Elist does not exist');
      const data: UpdateElistInput = decideUpdateEventData(command, state);

      if (data == null) return [];
      return [
        new ElistUpdatedEvent(data, {
          ...command.metadata,
          updated_at: new Date().toISOString(),
        }),
      ];
    }
    case 'DeleteElistCommand': {
      if (!state.exists) throw new BadRequestException('Elist does not exist');

      if (state.data.deleted_at != null) return [];

      return [new ElistDeletedEvent(command.data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    default: {
      return [];
    }
  }
}

export const decider: Decider<ElistState, ElistEvent, ElistCommand> = {
  initialState,
  evolve,
  decide,
};
