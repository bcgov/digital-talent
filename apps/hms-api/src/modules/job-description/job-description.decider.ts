import assert from 'assert';
import { BadRequestException } from '@nestjs/common';
import { JobDescription } from '../../@generated/prisma-nestjs-graphql';
import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { Decider } from '../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../event-store/utils/decide-update-event-data.util';
import { CreateJobDescriptionCommand } from './commands/create-job-description/create-job-description.command';
import { DeleteJobDescriptionCommand } from './commands/delete-job-description/delete-job-description.command';
import { UpdateJobDescriptionCommand } from './commands/update-job-description/update-job-description.command';
import { JobDescriptionCreatedEvent } from './events/job-description-created/job-description-created.event';
import { JobDescriptionDeletedEvent } from './events/job-description-deleted/job-description-deleted.event';
import { JobDescriptionUpdatedEvent } from './events/job-description-updated/job-description-updated.event';
import { CreateJobDescriptionInput } from './inputs/create-job-description.input';
import { UpdateJobDescriptionInput } from './inputs/update-job-description.input';

export type State = InitialState | ExistsState<'job-description', JobDescription>;
type Command = CreateJobDescriptionCommand | UpdateJobDescriptionCommand | DeleteJobDescriptionCommand;
type Event = JobDescriptionCreatedEvent | JobDescriptionUpdatedEvent | JobDescriptionDeletedEvent;

export const initialState: State = { exists: false };

export function evolve(state: State, event: Event): State {
  switch (event.type) {
    case 'JobDescriptionCreatedEvent': {
      assert(state.exists === false);

      const {
        data: { e_class_id, ...data },
        metadata,
      } = event;

      return {
        exists: true,
        type: 'job-description',
        data: {
          ...data,
          e_class_id,
          created_at: new Date(metadata.created_at),
          updated_at: null,
          deleted_at: null,
        },
      };
    }
    case 'JobDescriptionUpdatedEvent': {
      assert(state.exists === true);
      assert(state.type === 'job-description');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'job-description',
        data: {
          ...state.data,
          ...data,
          updated_at: new Date(metadata.created_at),
        },
      };
    }
    case 'JobDescriptionDeletedEvent': {
      assert(state.exists === true);
      assert(state.type === 'job-description');

      const { data, metadata } = event;

      return {
        exists: true,
        type: 'job-description',
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
    case 'CreateJobDescriptionCommand': {
      assert(state.exists === false, new BadRequestException('Job Description already exists'));

      const data: CreateJobDescriptionInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new JobDescriptionCreatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'UpdateJobDescriptionCommand': {
      assert(state.exists === true, new BadRequestException("Job Description doesn't exist"));
      assert(state.type === 'job-description');

      const data: UpdateJobDescriptionInput = decideUpdateEventData(command, state);
      if (data == null) return [];

      return [new JobDescriptionUpdatedEvent(data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    case 'DeleteJobDescriptionCommand': {
      assert(state.exists === true, new BadRequestException("Job Description doesn't exist"));
      assert(state.type === 'job-description');

      return [
        new JobDescriptionDeletedEvent(command.data, { ...command.metadata, created_at: new Date().toISOString() }),
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
