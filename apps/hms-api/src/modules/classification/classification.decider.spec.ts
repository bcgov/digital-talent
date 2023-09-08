import { AssertionError } from 'assert';
import { Metadata } from '../event-store/types/metadata.type';
import { State, decide, evolve } from './classification.decider';
import { CreateClassificationCommand } from './commands/create-classification/create-classification.command';
import { UpdateClassificationCommand } from './commands/update-classification/update-classification.command';
import { DeleteClassificationCommand } from './commands/delete-classification/delete-classification.command';
import { ClassificationCreatedEvent } from './events/classification-created/classification-created.event';
import { ClassificationUpdatedEvent } from './events/classification-updated/classification-updated.event';
import { ClassificationDeletedEvent } from './events/classification-deleted/classification-deleted.event';
import { CreateClassificationInput } from './inputs/create-classification.input';
import { DeleteClassificationInput } from './inputs/delete-classification.input';
import { UpdateClassificationInput } from './inputs/update-classification.input';

describe('classification.decider', () => {
  const mockInitialState: State = { exists: false };
  const mockExistingState: State = {
    exists: true,
    type: 'classification',
    data: {
      created_at: new Date('2023-08-21T12:00:00Z'),
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      grid_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
      occupation_group_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
      rate_adjustment: 0.124,
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockCreateClassificationInput: CreateClassificationInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    grid_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
    occupation_group_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
    rate_adjustment: 0.124,
  };

  const mockCreateClassificationCommand = new CreateClassificationCommand(mockCreateClassificationInput, mockMetadata);

  const mockUpdateClassificationInput: UpdateClassificationInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    grid_id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
    occupation_group_id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
    rate_adjustment: 0.125,
  };

  const mockUpdateClassificationCommand = new UpdateClassificationCommand(mockUpdateClassificationInput, mockMetadata);

  const mockDeleteClassificationInput: DeleteClassificationInput = { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' };

  const mockDeleteClassificationCommand = new DeleteClassificationCommand(mockDeleteClassificationInput, mockMetadata);

  describe('decide function', () => {
    it('throws error if trying to create an existing classification', () => {
      expect(() => {
        decide(mockExistingState, mockCreateClassificationCommand);
      }).toThrow(AssertionError);
    });

    it('creates an ClassificationCreatedEvent correctly', () => {
      const events = decide(mockInitialState, mockCreateClassificationCommand);
      expect(events[0]).toBeInstanceOf(ClassificationCreatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        grid_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
        occupation_group_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
        rate_adjustment: 0.124,
      });
    });

    it('throws error if trying to update a non-existing classification', () => {
      expect(() => {
        decide(mockInitialState, mockUpdateClassificationCommand);
      }).toThrow(AssertionError);
    });

    it('updates an existing Classification correctly', () => {
      const events = decide(mockExistingState, mockUpdateClassificationCommand);
      expect(events[0]).toBeInstanceOf(ClassificationUpdatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        grid_id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
        occupation_group_id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
        rate_adjustment: 0.125,
      });
    });

    it('throws error if trying to delete a non-existing classification', () => {
      expect(() => {
        decide(mockInitialState, mockDeleteClassificationCommand);
      }).toThrow(AssertionError);
    });

    it('deletes an existing Classification correctly', () => {
      const events = decide(mockExistingState, mockDeleteClassificationCommand);
      expect(events[0]).toBeInstanceOf(ClassificationDeletedEvent);
      expect(events[0].data).toEqual({ id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' });
    });
  });

  describe('evolve function', () => {
    it('evolves state for ClassificationCreatedEvent correctly', () => {
      const mockEvent = new ClassificationCreatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          grid_id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
          occupation_group_id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
          rate_adjustment: 0.125,
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'classification',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            grid_id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
            occupation_group_id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
            rate_adjustment: 0.125,
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for ClassificationUpdatedEvent correctly', () => {
      // Mock an initial state that has an existing classification
      const mockExistingState: State = {
        exists: true,
        type: 'classification',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          grid_id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
          occupation_group_id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
          rate_adjustment: 0.125,
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new ClassificationUpdatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          grid_id: 'd290f1ee-6c54-4b01-90e6-d701748f0855',
          occupation_group_id: 'd290f1ee-6c54-4b01-90e6-d701748f0855',
          rate_adjustment: 0.126,
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'classification',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            grid_id: 'd290f1ee-6c54-4b01-90e6-d701748f0855',
            occupation_group_id: 'd290f1ee-6c54-4b01-90e6-d701748f0855',
            rate_adjustment: 0.126,
            updated_at: expect.any(Date), // Ensure updated_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for ClassificationDeletedEvent correctly', () => {
      // Mock an initial state that has an existing classification
      const mockExistingState: State = {
        exists: true,
        type: 'classification',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          grid_id: 'd290f1ee-6c54-4b01-90e6-d701748f0855',
          occupation_group_id: 'd290f1ee-6c54-4b01-90e6-d701748f0855',
          rate_adjustment: 0.126,
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new ClassificationDeletedEvent(
        { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'classification',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
