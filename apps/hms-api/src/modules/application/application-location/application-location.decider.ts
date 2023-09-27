import { BadRequestException } from '@nestjs/common';
import { ApplicationLocation } from '../../../@generated/prisma-nestjs-graphql';
import { ExistsState, InitialState } from '../../event-store/types/decider-state.type';
import { Decider } from '../../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../../event-store/utils/decide-update-event-data.util';
import { CreateApplicationLocationCommand } from './commands/create-application-location/create-application-location.command';
import { DeleteApplicationLocationCommand } from './commands/delete-application-location/delete-application-location.command';
import { UpdateApplicationLocationCommand } from './commands/update-application-location/update-application-location.command';
import { ApplicationLocationCreatedEvent } from './events/application-location-created/application-location-created.event';
import { ApplicationLocationDeletedEvent } from './events/application-location-deleted/application-location-deleted.event';
import { ApplicationLocationUpdatedEvent } from './events/application-location-updated/application-location-updated.event';
import { CreateApplicationLocationInput } from './inputs/create-application-location.input';
import { UpdateApplicationLocationInput } from './inputs/update-application-location.input';

export type ApplicationLocationState = InitialState | ExistsState<'application-location', ApplicationLocation>;
export type ApplicationLocationCommand =
  | CreateApplicationLocationCommand
  | UpdateApplicationLocationCommand
  | DeleteApplicationLocationCommand;
export type ApplicationLocationEvent =
  | ApplicationLocationCreatedEvent
  | ApplicationLocationUpdatedEvent
  | ApplicationLocationDeletedEvent;

export const initialState: ApplicationLocationState = { exists: false };

export function evolve(state: ApplicationLocationState, event: ApplicationLocationEvent): ApplicationLocationState {
  switch (event.type) {
    case 'ApplicationLocationCreatedEvent': {
      const { data, metadata } = event;
      return {
        exists: true,
        type: 'application-location',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          created_at: new Date(state.exists === false ? metadata.created_at : state.data.created_at),
        },
      };
    }
    case 'ApplicationLocationUpdatedEvent': {
      const { data, metadata } = event;

      return {
        exists: true,
        type: 'application-location',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          updated_at: new Date(metadata.created_at as string),
        },
      };
    }
    case 'ApplicationLocationDeletedEvent': {
      const { metadata } = event;

      return {
        exists: true,
        type: 'application-location',
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

export function decide(
  state: ApplicationLocationState,
  command: ApplicationLocationCommand,
): ApplicationLocationEvent[] {
  switch (command.type) {
    case 'CreateApplicationLocationCommand': {
      if (state.exists) throw new BadRequestException('ApplicationLocation already exists');

      const data: CreateApplicationLocationInput = decideUpdateEventData(command, state);

      if (data == null) return [];

      return [
        new ApplicationLocationCreatedEvent(data, {
          ...command.metadata,
          created_at: new Date().toISOString(),
        }),
      ];
    }
    case 'UpdateApplicationLocationCommand': {
      if (!state.exists) throw new BadRequestException('ApplicationLocation does not exist');
      const data: UpdateApplicationLocationInput = decideUpdateEventData(command, state);

      if (data == null) return [];
      return [
        new ApplicationLocationUpdatedEvent(data, {
          ...command.metadata,
          updated_at: new Date().toISOString(),
        }),
      ];
    }
    case 'DeleteApplicationLocationCommand': {
      if (!state.exists) throw new BadRequestException('ApplicationLocation does not exist');

      if (state.data.deleted_at != null) return [];

      return [
        new ApplicationLocationDeletedEvent(command.data, {
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

export const decider: Decider<ApplicationLocationState, ApplicationLocationEvent, ApplicationLocationCommand> = {
  initialState,
  evolve,
  decide,
};
