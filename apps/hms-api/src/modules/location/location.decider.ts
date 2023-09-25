import { BadRequestException } from '@nestjs/common';
import { Location } from '../../@generated/prisma-nestjs-graphql';
import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { Decider } from '../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../event-store/utils/decide-update-event-data.util';
import { CreateLocationCommand } from './commands/create-location/create-location.command';
import { DeleteLocationCommand } from './commands/delete-location/delete-location.command';
import { UpdateLocationCommand } from './commands/update-location/update-location.command';
import { LocationCreatedEvent } from './events/location-created/location-created.event';
import { LocationDeletedEvent } from './events/location-deleted/location-deleted.event';
import { LocationUpdatedEvent } from './events/location-updated/location-updated.event';
import { CreateLocationInput } from './inputs/create-location.input';
import { UpdateLocationInput } from './inputs/update-location.input';

export type LocationState = InitialState | ExistsState<'location', Location>;
export type LocationCommand = CreateLocationCommand | UpdateLocationCommand | DeleteLocationCommand;
export type LocationEvent = LocationCreatedEvent | LocationUpdatedEvent | LocationDeletedEvent;

export const initialState: LocationState = { exists: false };

export function evolve(state: LocationState, event: LocationEvent): LocationState {
  switch (event.type) {
    case 'LocationCreatedEvent': {
      const { data, metadata } = event;
      return {
        exists: true,
        type: 'location',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          created_at: new Date(state.exists === false ? metadata.created_at : state.data.created_at),
        },
      };
    }
    case 'LocationUpdatedEvent': {
      const { data, metadata } = event;

      return {
        exists: true,
        type: 'location',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          updated_at: new Date(metadata.created_at as string),
        },
      };
    }
    case 'LocationDeletedEvent': {
      const { metadata } = event;

      return {
        exists: true,
        type: 'location',
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

export function decide(state: LocationState, command: LocationCommand): LocationEvent[] {
  switch (command.type) {
    case 'CreateLocationCommand': {
      if (state.exists) throw new BadRequestException('Location already exists');
      const data: CreateLocationInput = decideUpdateEventData(command, state);

      if (data == null) return [];

      return [
        new LocationCreatedEvent(data, {
          ...command.metadata,
          created_at: new Date().toISOString(),
        }),
      ];
    }
    case 'UpdateLocationCommand': {
      if (!state.exists) throw new BadRequestException('Location does not exist');
      const data: UpdateLocationInput = decideUpdateEventData(command, state);

      if (data == null) return [];
      return [
        new LocationUpdatedEvent(data, {
          ...command.metadata,
          updated_at: new Date().toISOString(),
        }),
      ];
    }
    case 'DeleteLocationCommand': {
      if (!state.exists) throw new BadRequestException('Location does not exist');

      if (state.data.deleted_at != null) return [];

      return [new LocationDeletedEvent(command.data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    default: {
      return [];
    }
  }
}

export const decider: Decider<LocationState, LocationEvent, LocationCommand> = {
  initialState,
  evolve,
  decide,
};
