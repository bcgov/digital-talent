import assert from 'assert';
import { BadRequestException } from '@nestjs/common';
import { Comment } from '../../@generated/prisma-nestjs-graphql';
import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { Decider } from '../event-store/utils/create-command-handler.util';
import { decideUpdateEventData } from '../event-store/utils/decide-update-event-data.util';
import { CreateCommentCommand } from './commands/create-comment/create-comment.command';
import { DeleteCommentCommand } from './commands/delete-comment/delete-comment.command';
import { UpdateCommentCommand } from './commands/update-comment/update-comment.command';
import { CommentCreatedEvent } from './events/comment-created/comment-created.event';
import { CommentDeletedEvent } from './events/comment-deleted/comment-deleted.event';
import { CommentUpdatedEvent } from './events/comment-updated/comment-updated.event';
import { CreateCommentInput } from './inputs/create-comment.input';
import { UpdateCommentInput } from './inputs/update-comment.input';

export type CommentState = InitialState | ExistsState<'comment', Comment>;
export type CommentCommand = CreateCommentCommand | UpdateCommentCommand | DeleteCommentCommand;
export type CommentEvent = CommentCreatedEvent | CommentUpdatedEvent | CommentDeletedEvent;

export const initialState: CommentState = { exists: false };

export function evolve(state: CommentState, event: CommentEvent): CommentState {
  switch (event.type) {
    case 'CommentCreatedEvent': {
      const { data, metadata } = event;
      return {
        exists: true,
        type: 'comment',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          created_at: new Date(state.exists === false ? metadata.created_at : state.data.created_at),
        },
      };
    }
    case 'CommentUpdatedEvent': {
      const { data, metadata } = event;

      return {
        exists: true,
        type: 'comment',
        data: {
          ...(state.exists === true && { ...state.data }),
          ...data,
          updated_at: new Date(metadata.created_at as string),
        },
      };
    }
    case 'CommentDeletedEvent': {
      const { metadata } = event;

      return {
        exists: true,
        type: 'comment',
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

export function decide(state: CommentState, command: CommentCommand): CommentEvent[] {
  switch (command.type) {
    case 'CreateCommentCommand': {
      if (state.exists) throw new BadRequestException('Comment already exists');

      const data: CreateCommentInput = decideUpdateEventData(command, state);

      if (data == null) return [];

      return [
        new CommentCreatedEvent(data, {
          ...command.metadata,
          created_at: new Date().toISOString(),
        }),
      ];
    }
    case 'UpdateCommentCommand': {
      if (!state.exists) throw new BadRequestException('Comment does not exist');
      const data: UpdateCommentInput = decideUpdateEventData(command, state);
      if (data == null) return [];
      return [
        new CommentUpdatedEvent(data, {
          ...command.metadata,
          updated_at: new Date().toISOString(),
        }),
      ];
    }
    case 'DeleteCommentCommand': {
      if (!state.exists) throw new BadRequestException("Comment doesn't exist");
      assert(state.type === 'comment');

      if (state.data.deleted_at != null) return [];

      return [new CommentDeletedEvent(command.data, { ...command.metadata, created_at: new Date().toISOString() })];
    }
    default: {
      return [];
    }
  }
}

export const decider: Decider<CommentState, CommentEvent, CommentCommand> = {
  initialState,
  evolve,
  decide,
};
