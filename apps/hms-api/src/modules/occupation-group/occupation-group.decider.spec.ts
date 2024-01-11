import { BadRequestException } from '@nestjs/common';
import { Metadata } from '../event-store/types/metadata.type';
import { CreateOccupationGroupCommand } from './commands/create-occupation-group/create-occupation-group.command';
import { DeleteOccupationGroupCommand } from './commands/delete-occupation-group/delete-occupation-group.command';
import { UpdateOccupationGroupCommand } from './commands/update-occupation-group/update-occupation-group.command';
import { OccupationGroupCreatedEvent } from './events/occupation-group-created/occupation-group-created.event';
import { OccupationGroupDeletedEvent } from './events/occupation-group-deleted/occupation-group-deleted.event';
import { OccupationGroupUpdatedEvent } from './events/occupation-group-updated/occupation-group-updated.event';
import { CreateOccupationGroupInput } from './inputs/create-occupation-group.input';
import { DeleteOccupationGroupInput } from './inputs/delete-occupation-group.input';
import { UpdateOccupationGroupInput } from './inputs/update-occupation-group.input';
import { decide, evolve, State } from './occupation-group.decider';

describe('occupation-group.decider', () => {
  const mockInitialState: State = { exists: false };
  const mockExistingState: State = {
    exists: true,
    type: 'occupation-group',
    data: {
      created_at: new Date('2023-08-21T12:00:00Z'),
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      code: 'test_code',
      name: 'test_name',
      updated_at: null,
      deleted_at: null,
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockCreateOccupationGroupInput: CreateOccupationGroupInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    code: 'test_code',
    name: 'test_name',
  };

  const mockCreateOccupationGroupCommand = new CreateOccupationGroupCommand(
    mockCreateOccupationGroupInput,
    mockMetadata,
  );

  const mockUpdateOccupationGroupInput: UpdateOccupationGroupInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    code: 'test_code_2',
    name: 'test_name_2',
  };

  const mockUpdateOccupationGroupCommand = new UpdateOccupationGroupCommand(
    mockUpdateOccupationGroupInput,
    mockMetadata,
  );

  const mockDeleteOccupationGroupInput: DeleteOccupationGroupInput = { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' };

  const mockDeleteOccupationGroupCommand = new DeleteOccupationGroupCommand(
    mockDeleteOccupationGroupInput,
    mockMetadata,
  );

  describe('decide function', () => {
    it('throws error if trying to create an existing occupation-group', () => {
      expect(() => {
        decide(mockExistingState, mockCreateOccupationGroupCommand);
      }).toThrow(BadRequestException);
    });

    it('creates an OccupationGroupCreatedEvent correctly', () => {
      const events = decide(mockInitialState, mockCreateOccupationGroupCommand);
      expect(events[0]).toBeInstanceOf(OccupationGroupCreatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        code: 'test_code',
        name: 'test_name',
      });
    });

    it('throws error if trying to update a non-existing occupation-group', () => {
      expect(() => {
        decide(mockInitialState, mockUpdateOccupationGroupCommand);
      }).toThrow(BadRequestException);
    });

    it('updates an existing OccupationGroup correctly', () => {
      const events = decide(mockExistingState, mockUpdateOccupationGroupCommand);
      expect(events[0]).toBeInstanceOf(OccupationGroupUpdatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        code: 'test_code_2',
        name: 'test_name_2',
      });
    });

    it('throws error if trying to delete a non-existing occupation-group', () => {
      expect(() => {
        decide(mockInitialState, mockDeleteOccupationGroupCommand);
      }).toThrow(BadRequestException);
    });

    it('deletes an existing OccupationGroup correctly', () => {
      const events = decide(mockExistingState, mockDeleteOccupationGroupCommand);
      expect(events[0]).toBeInstanceOf(OccupationGroupDeletedEvent);
      expect(events[0].data).toEqual({ id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' });
    });
  });

  describe('evolve function', () => {
    it('evolves state for OccupationGroupCreatedEvent correctly', () => {
      const mockEvent = new OccupationGroupCreatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          code: 'test_code',
          name: 'test_name',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'occupation-group',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            code: 'test_code',
            name: 'test_name',
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for OccupationGroupUpdatedEvent correctly', () => {
      // Mock an initial state that has an existing occupation-group
      const mockExistingState: State = {
        exists: true,
        type: 'occupation-group',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          code: 'test_code',
          name: 'test_name',
          created_at: new Date('2023-08-21T10:00:00Z'),
          updated_at: null,
          deleted_at: null,
        },
      };

      const mockEvent = new OccupationGroupUpdatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          code: 'test_code_2',
          name: 'test_name_2',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'occupation-group',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            code: 'test_code_2',
            name: 'test_name_2',
            updated_at: expect.any(Date), // Ensure updated_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for OccupationGroupDeletedEvent correctly', () => {
      // Mock an initial state that has an existing occupation-group
      const mockExistingState: State = {
        exists: true,
        type: 'occupation-group',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          code: 'test_code_2',
          name: 'test_name_2',
          created_at: new Date('2023-08-21T10:00:00Z'),
          updated_at: null,
          deleted_at: null,
        },
      };

      const mockEvent = new OccupationGroupDeletedEvent(
        { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'occupation-group',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
