import { BadRequestException } from '@nestjs/common';
import { ExistsState, InitialState } from '../../event-store/types/decider-state.type';
import { Decider } from '../../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../../event-store/utils/decide-update-event-data.util';
import { CreateApplicationCommand } from './commands/create-application/create-application.command';
import { DeleteApplicationCommand } from './commands/delete-application/delete-application.command';
import { UpdateApplicationCommand } from './commands/update-application/update-application.command';
import { ApplicationEntity } from './entities/application.entity';
import { ApplicationCreatedEvent } from './events/application-created/application-created.event';
import { ApplicationDeletedEvent } from './events/application-deleted/application-deleted.event';
import { ApplicationUpdatedEvent } from './events/application-updated/application-updated.event';
import { CreateApplicationInput } from './inputs/create-application.input';
import { UpdateApplicationInput } from './inputs/update-application.input';

export type ApplicationState = InitialState | ExistsState<'application', ApplicationEntity>;
export type ApplicationCommand = CreateApplicationCommand | UpdateApplicationCommand | DeleteApplicationCommand;
export type ApplicationEvent = ApplicationCreatedEvent | ApplicationUpdatedEvent | ApplicationDeletedEvent;

export const initialState: ApplicationState = { exists: false };

export function evolve(state: ApplicationState, event: ApplicationEvent): ApplicationState {
  switch (event.type) {
    case 'ApplicationCreatedEvent': {
      const { data, metadata } = event;
      return {
        exists: true,
        type: 'application',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          created_at: new Date(state.exists === false ? metadata.created_at : state.data.created_at),
        },
      };
    }
    case 'ApplicationUpdatedEvent': {
      const { data, metadata } = event;

      return {
        exists: true,
        type: 'application',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          updated_at: new Date(metadata.created_at as string),
        },
      };
    }
    case 'ApplicationDeletedEvent': {
      const { metadata } = event;

      return {
        exists: true,
        type: 'application',
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

export function decide(state: ApplicationState, command: ApplicationCommand): ApplicationEvent[] {
  switch (command.type) {
    case 'CreateApplicationCommand': {
      if (state.exists) throw new BadRequestException('Application already exists');

      const data: CreateApplicationInput = decideUpdateEventData(command, state);

      if (data == null) return [];

      return [
        new ApplicationCreatedEvent(data, {
          ...command.metadata,
          created_at: new Date().toISOString(),
        }),
      ];
    }
    case 'UpdateApplicationCommand': {
      if (!state.exists) throw new BadRequestException('Application does not exist');
      const data: UpdateApplicationInput = decideUpdateEventData(command, state);

      if (data == null) return [];
      return [
        new ApplicationUpdatedEvent(data, {
          ...command.metadata,
          updated_at: new Date().toISOString(),
        }),
      ];
    }
    case 'DeleteApplicationCommand': {
      if (!state.exists) throw new BadRequestException('Application does not exist');

      if (state.data.deleted_at != null) return [];

      return [new ApplicationDeletedEvent(command.data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    default: {
      return [];
    }
  }
}

export const decider: Decider<ApplicationState, ApplicationEvent, ApplicationCommand> = {
  initialState,
  evolve,
  decide,
};
