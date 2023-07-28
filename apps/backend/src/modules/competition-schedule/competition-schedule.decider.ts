import { BadRequestException } from '@nestjs/common';
import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { Decider } from '../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../event-store/utils/decide-update-event-data.util';
import { CreateCompetitionScheduleCommand } from './commands/create-competition-schedule/create-competition-schedule.command';
import { DeleteCompetitionScheduleCommand } from './commands/delete-competition-schedule/delete-competition-schedule.command';
import { UpdateCompetitionScheduleCommand } from './commands/update-competition-schedule/update-competition-schedule.command';
import { CompetitionScheduleEntity } from './entities/competition-schedule.entity';
import { CompetitionScheduleCreatedEvent } from './events/competition-schedule-created/competition-schedule-created.event';
import { CompetitionScheduleDeletedEvent } from './events/competition-schedule-deleted/competition-schedule-deleted.event';
import { CompetitionScheduleUpdatedEvent } from './events/competition-schedule-updated/competition-schedule-updated.event';
import { CreateCompetitionScheduleInput } from './inputs/create-competition-schedule.input';
import { UpdateCompetitionScheduleInput } from './inputs/update-competition-schedule.input';

export type CompetitionScheduleState = InitialState | ExistsState<'competition-schedule', CompetitionScheduleEntity>;
export type CompetitionScheduleCommand =
  | CreateCompetitionScheduleCommand
  | UpdateCompetitionScheduleCommand
  | DeleteCompetitionScheduleCommand;
export type CompetitionScheduleEvent =
  | CompetitionScheduleCreatedEvent
  | CompetitionScheduleUpdatedEvent
  | CompetitionScheduleDeletedEvent;

export const initialState: CompetitionScheduleState = { exists: false };

export function evolve(state: CompetitionScheduleState, event: CompetitionScheduleEvent): CompetitionScheduleState {
  switch (event.type) {
    case 'CompetitionScheduleCreatedEvent': {
      const { data, metadata } = event;

      return {
        exists: true,
        type: 'competition-schedule',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          created_at: new Date(state.exists === false ? metadata.created_at : state.data.created_at),
        },
      };
    }
    case 'CompetitionScheduleUpdatedEvent': {
      const { data, metadata } = event;

      return {
        exists: true,
        type: 'competition-schedule',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          updated_at: new Date(metadata.created_at as string),
        },
      };
    }
    case 'CompetitionScheduleDeletedEvent': {
      const { metadata } = event;

      return {
        exists: true,
        type: 'competition-schedule',
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
  state: CompetitionScheduleState,
  command: CompetitionScheduleCommand,
): CompetitionScheduleEvent[] {
  switch (command.type) {
    case 'CreateCompetitionScheduleCommand': {
      if (state.exists) throw new BadRequestException('Competition Schedule already exists');

      const data: CreateCompetitionScheduleInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [
        new CompetitionScheduleCreatedEvent(data, {
          ...command.metadata,
          created_at: new Date().toISOString(),
        }),
      ];
    }
    case 'UpdateCompetitionScheduleCommand': {
      if (!state.exists) throw new BadRequestException('Competition Schedule does not exist');
      const data: UpdateCompetitionScheduleInput = decideUpdateEventData(command, state);
      if (data == null) return [];
      return [
        new CompetitionScheduleUpdatedEvent(data, {
          ...command.metadata,
          updated_at: new Date().toISOString(),
        }),
      ];
    }
    case 'DeleteCompetitionScheduleCommand': {
      if (!state.exists) throw new BadRequestException('Competition Schedule does not exist');

      const data: CreateCompetitionScheduleInput = decideUpdateEventData(command, state);

      if (data == null) return [];
      return [
        new CompetitionScheduleDeletedEvent(
          { ...data, deleted_at: command.data.deleted_at },
          {
            ...command.metadata,
            deleted_at: command.data.deleted_at,
          },
        ),
      ];
    }
    default: {
      return [];
    }
  }
}

export const decider: Decider<CompetitionScheduleState, CompetitionScheduleEvent, CompetitionScheduleCommand> = {
  initialState,
  evolve,
  decide,
};
