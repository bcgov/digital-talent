import { BadRequestException } from '@nestjs/common';
import { Metadata } from '../../event-store/types/metadata.type';
import { State, decide, evolve } from './position.decider';
import { CreatePositionCommand } from './commands/create-position/create-position.command';
import { UpdatePositionCommand } from './commands/update-position/update-position.command';
import { DeletePositionCommand } from './commands/delete-position/delete-position.command';
import { PositionCreatedEvent } from './events/position-created/position-created.event';
import { PositionUpdatedEvent } from './events/position-updated/position-updated.event';
import { PositionDeletedEvent } from './events/position-deleted/position-deleted.event';
import { CreatePositionInput } from './inputs/create-position.input';
import { DeletePositionInput } from './inputs/delete-position.input';
import { UpdatePositionInput } from './inputs/update-position.input';

describe('position.decider', () => {
  const mockInitialState: State = { exists: false };
  const mockExistingState: State = {
    exists: true,
    type: 'position',
    data: {
      created_at: new Date('2023-08-21T12:00:00Z'),
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      category: 'BAND',
      name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      description: 'asdf',
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockCreatePositionInput: CreatePositionInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    category: 'BAND',
    name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    description: 'asdf',
  };

  const mockCreatePositionCommand = new CreatePositionCommand(mockCreatePositionInput, mockMetadata);

  const mockUpdatePositionInput: UpdatePositionInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    category: 'AO',
    name: 'd290f1ee-6c54-4b01-90e6-d701748f08d3',
    description: 'asddff',
  };

  const mockUpdatePositionCommand = new UpdatePositionCommand(mockUpdatePositionInput, mockMetadata);

  const mockDeletePositionInput: DeletePositionInput = { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' };

  const mockDeletePositionCommand = new DeletePositionCommand(mockDeletePositionInput, mockMetadata);

  describe('decide function', () => {
    it('throws error if trying to create an existing position', () => {
      expect(() => {
        decide(mockExistingState, mockCreatePositionCommand);
      }).toThrow(BadRequestException);
    });

    it('creates an PositionCreatedEvent correctly', () => {
      const events = decide(mockInitialState, mockCreatePositionCommand);
      expect(events[0]).toBeInstanceOf(PositionCreatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        category: 'BAND',
        name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        description: 'asdf',
      });
    });

    it('throws error if trying to update a non-existing position', () => {
      expect(() => {
        decide(mockInitialState, mockUpdatePositionCommand);
      }).toThrow(BadRequestException);
    });

    it('updates an existing Position correctly', () => {
      const events = decide(mockExistingState, mockUpdatePositionCommand);
      expect(events[0]).toBeInstanceOf(PositionUpdatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        category: 'AO',
        name: 'd290f1ee-6c54-4b01-90e6-d701748f08d3',
        description: 'asddff',
      });
    });

    it('throws error if trying to delete a non-existing position', () => {
      expect(() => {
        decide(mockInitialState, mockDeletePositionCommand);
      }).toThrow(BadRequestException);
    });

    it('deletes an existing Position correctly', () => {
      const events = decide(mockExistingState, mockDeletePositionCommand);
      expect(events[0]).toBeInstanceOf(PositionDeletedEvent);
      expect(events[0].data).toEqual({ id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' });
    });
  });

  describe('evolve function', () => {
    it('evolves state for PositionCreatedEvent correctly', () => {
      const mockEvent = new PositionCreatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          category: 'AO',
          name: 'd290f1ee-6c54-4b01-90e6-d701748f08d3',
          description: 'asddff',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'position',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            category: 'AO',
            name: 'd290f1ee-6c54-4b01-90e6-d701748f08d3',
            description: 'asddff',
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for PositionUpdatedEvent correctly', () => {
      // Mock an initial state that has an existing position
      const mockExistingState: State = {
        exists: true,
        type: 'position',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          category: 'AO',
          name: 'd290f1ee-6c54-4b01-90e6-d701748f08d3',
          description: 'asddff',
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new PositionUpdatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          category: 'BAND',
          name: 'd290f1ee-6c54-4b01-90e6-d701742f08d3',
          description: 'asdfdff',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'position',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            category: 'BAND',
            name: 'd290f1ee-6c54-4b01-90e6-d701742f08d3',
            description: 'asdfdff',
            updated_at: expect.any(Date), // Ensure updated_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for PositionDeletedEvent correctly', () => {
      // Mock an initial state that has an existing position
      const mockExistingState: State = {
        exists: true,
        type: 'position',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          category: 'BAND',
          name: 'd290f1ee-6c54-4b01-90e6-d701742f08d3',
          description: 'asdfdff',
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new PositionDeletedEvent(
        { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'position',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
