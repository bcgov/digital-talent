import { BadRequestException } from '@nestjs/common';
import { Metadata } from '../event-store/types/metadata.type';
import { CommentState, decide, evolve } from './comment.decider';
import { CreateCommentCommand } from './commands/create-comment/create-comment.command';
import { UpdateCommentCommand } from './commands/update-comment/update-comment.command';
import { DeleteCommentCommand } from './commands/delete-comment/delete-comment.command';
import { CommentCreatedEvent } from './events/comment-created/comment-created.event';
import { CommentUpdatedEvent } from './events/comment-updated/comment-updated.event';
import { CommentDeletedEvent } from './events/comment-deleted/comment-deleted.event';
import { CreateCommentInput } from './inputs/create-comment.input';
import { DeleteCommentInput } from './inputs/delete-comment.input';
import { UpdateCommentInput } from './inputs/update-comment.input';

describe('comment.decider', () => {
  const mockInitialState: CommentState = { exists: false };
  const mockExistingState: CommentState = {
    exists: true,
    type: 'comment',
    data: {
      created_at: new Date('2023-08-21T12:00:00Z'),
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      record_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      record_type: 'record_type',
      user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      text: 'text',
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockCreateCommentInput: CreateCommentInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    record_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    record_type: 'record_type',
    user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    text: 'text',
  };

  const mockCreateCommentCommand = new CreateCommentCommand(mockCreateCommentInput, mockMetadata);

  const mockUpdateCommentInput: UpdateCommentInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0352',
    text: 'text2',
  };

  const mockUpdateCommentCommand = new UpdateCommentCommand(mockUpdateCommentInput, mockMetadata);

  const mockDeleteCommentInput: DeleteCommentInput = { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' };

  const mockDeleteCommentCommand = new DeleteCommentCommand(mockDeleteCommentInput, mockMetadata);

  describe('decide function', () => {
    it('throws error if trying to create an existing comment', () => {
      expect(() => {
        decide(mockExistingState, mockCreateCommentCommand);
      }).toThrow(BadRequestException);
    });

    it('creates an CommentCreatedEvent correctly', () => {
      const events = decide(mockInitialState, mockCreateCommentCommand);
      expect(events[0]).toBeInstanceOf(CommentCreatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        record_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        record_type: 'record_type',
        user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        text: 'text',
      });
    });

    it('throws error if trying to update a non-existing comment', () => {
      expect(() => {
        decide(mockInitialState, mockUpdateCommentCommand);
      }).toThrow(BadRequestException);
    });

    it('updates an existing Comment correctly', () => {
      const events = decide(mockExistingState, mockUpdateCommentCommand);
      expect(events[0]).toBeInstanceOf(CommentUpdatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0352',
        text: 'text2',
      });
    });

    it('throws error if trying to delete a non-existing comment', () => {
      expect(() => {
        decide(mockInitialState, mockDeleteCommentCommand);
      }).toThrow(BadRequestException);
    });

    it('deletes an existing Comment correctly', () => {
      const events = decide(mockExistingState, mockDeleteCommentCommand);
      expect(events[0]).toBeInstanceOf(CommentDeletedEvent);
      expect(events[0].data).toEqual({ id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' });
    });
  });

  describe('evolve function', () => {
    it('evolves state for CommentCreatedEvent correctly', () => {
      const mockEvent = new CommentCreatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          record_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          record_type: 'record_type',
          user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          text: 'text',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'comment',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            record_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            record_type: 'record_type',
            user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            text: 'text',
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for CommentUpdatedEvent correctly', () => {
      // Mock an initial state that has an existing comment
      const mockExistingState: CommentState = {
        exists: true,
        type: 'comment',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          record_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          record_type: 'record_type',
          user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          text: 'text',
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new CommentUpdatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          text: 'text2',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'comment',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            record_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            record_type: 'record_type',
            user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            text: 'text2',
            created_at: new Date('2023-08-21T10:00:00Z'),
            updated_at: expect.any(Date), // Ensure updated_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for CommentDeletedEvent correctly', () => {
      // Mock an initial state that has an existing comment
      const mockExistingState: CommentState = {
        exists: true,
        type: 'comment',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          record_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          record_type: 'record_type',
          user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          text: 'text2',
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new CommentDeletedEvent(
        { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'comment',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
