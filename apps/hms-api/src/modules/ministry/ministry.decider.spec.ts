import { BadRequestException } from '@nestjs/common';
import { Metadata } from '../event-store/types/metadata.type';
import { decide, evolve } from './ministry.decider';
import { CreateMinistryCommand } from './commands/create-ministry/create-ministry.command';
import { UpdateMinistryCommand } from './commands/update-ministry/update-ministry.command';
import { DeleteMinistryCommand } from './commands/delete-ministry/delete-ministry.command';
import { MinistryCreatedEvent } from './events/ministry-created/ministry-created.event';
import { MinistryUpdatedEvent } from './events/ministry-updated/ministry-updated.event';
import { MinistryDeletedEvent } from './events/ministry-deleted/ministry-deleted.event';
import { CreateMinistryInput } from './inputs/create-ministry.input';
import { DeleteMinistryInput } from './inputs/delete-ministry.input';
import { UpdateMinistryInput } from './inputs/update-ministry.input';
import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { MinistryWriteModel } from './models/ministry-write.model';

type MinistryState = InitialState | ExistsState<'ministry', MinistryWriteModel>;

describe('ministry.decider', () => {
  const mockInitialState: MinistryState = { exists: false };
  const mockExistingState: MinistryState = {
    exists: true,
    type: 'ministry',
    data: {
      created_at: new Date('2023-08-21T12:00:00Z'),
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      deltek_id: 'test_deltek_id',
      name: 'test_name',
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockCreateMinistryInput: CreateMinistryInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    deltek_id: 'test_deltek_id',
    name: 'test_name',
  };

  const mockCreateMinistryCommand = new CreateMinistryCommand(mockCreateMinistryInput, mockMetadata);

  const mockUpdateMinistryInput: UpdateMinistryInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    deltek_id: 'test_deltek_id_2',
    name: 'test_name_2',
  };

  const mockUpdateMinistryCommand = new UpdateMinistryCommand(mockUpdateMinistryInput, mockMetadata);

  const mockDeleteMinistryInput: DeleteMinistryInput = { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' };

  const mockDeleteMinistryCommand = new DeleteMinistryCommand(mockDeleteMinistryInput, mockMetadata);

  describe('decide function', () => {
    it('throws error if trying to create an existing ministry', () => {
      expect(() => {
        decide(mockExistingState, mockCreateMinistryCommand);
      }).toThrow(BadRequestException);
    });

    it('creates an MinistryCreatedEvent correctly', () => {
      const events = decide(mockInitialState, mockCreateMinistryCommand);
      expect(events[0]).toBeInstanceOf(MinistryCreatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        deltek_id: 'test_deltek_id',
        name: 'test_name',
      });
    });

    it('throws error if trying to update a non-existing ministry', () => {
      expect(() => {
        decide(mockInitialState, mockUpdateMinistryCommand);
      }).toThrow(BadRequestException);
    });

    it('updates an existing Ministry correctly', () => {
      const events = decide(mockExistingState, mockUpdateMinistryCommand);
      expect(events[0]).toBeInstanceOf(MinistryUpdatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        deltek_id: 'test_deltek_id_2',
        name: 'test_name_2',
      });
    });

    it('throws error if trying to delete a non-existing ministry', () => {
      expect(() => {
        decide(mockInitialState, mockDeleteMinistryCommand);
      }).toThrow(BadRequestException);
    });

    it('deletes an existing Ministry correctly', () => {
      const events = decide(mockExistingState, mockDeleteMinistryCommand);
      expect(events[0]).toBeInstanceOf(MinistryDeletedEvent);
      expect(events[0].data).toEqual({ id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' });
    });
  });

  describe('evolve function', () => {
    it('evolves state for MinistryCreatedEvent correctly', () => {
      const mockEvent = new MinistryCreatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          deltek_id: 'test_deltek_id',
          name: 'test_name',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'ministry',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            deltek_id: 'test_deltek_id',
            name: 'test_name',
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for MinistryUpdatedEvent correctly', () => {
      // Mock an initial state that has an existing ministry
      const mockExistingState: MinistryState = {
        exists: true,
        type: 'ministry',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          deltek_id: 'test_deltek_id',
          name: 'test_name',
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new MinistryUpdatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          deltek_id: 'test_deltek_id_2',
          name: 'test_name_2',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'ministry',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            deltek_id: 'test_deltek_id_2',
            name: 'test_name_2',
            updated_at: expect.any(Date), // Ensure updated_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for MinistryDeletedEvent correctly', () => {
      // Mock an initial state that has an existing ministry
      const mockExistingState: MinistryState = {
        exists: true,
        type: 'ministry',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          deltek_id: 'test_deltek_id_2',
          name: 'test_name_2',
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new MinistryDeletedEvent(
        { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'ministry',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
