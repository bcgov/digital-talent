import { BadRequestException } from '@nestjs/common';
import { Metadata } from '../../event-store/types/metadata.type';
import { ElistState, decide, evolve } from './elist.decider';
import { CreateElistCommand } from './commands/create-elist/create-elist.command';
import { UpdateElistCommand } from './commands/update-elist/update-elist.command';
import { DeleteElistCommand } from './commands/delete-elist/delete-elist.command';
import { ElistCreatedEvent } from './events/elist-created/elist-created.event';
import { ElistUpdatedEvent } from './events/elist-updated/elist-updated.event';
import { ElistDeletedEvent } from './events/elist-deleted/elist-deleted.event';
import { CreateElistInput } from './inputs/create-elist.input';
import { DeleteElistInput } from './inputs/delete-elist.input';
import { UpdateElistInput } from './inputs/update-elist.input';

describe('elist.decider', () => {
  const mockInitialState: ElistState = { exists: false };
  const mockExistingState: ElistState = {
    exists: true,
    type: 'elist',
    data: {
      created_at: new Date('2023-08-21T12:00:00Z'),
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      rank: 5,
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockCreateElistInput: CreateElistInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    rank: 5,
  };

  const mockCreateElistCommand = new CreateElistCommand(mockCreateElistInput, mockMetadata);

  const mockUpdateElistInput: UpdateElistInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
    competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
    rank: 4,
  };

  const mockUpdateElistCommand = new UpdateElistCommand(mockUpdateElistInput, mockMetadata);

  const mockDeleteElistInput: DeleteElistInput = { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' };

  const mockDeleteElistCommand = new DeleteElistCommand(mockDeleteElistInput, mockMetadata);

  describe('decide function', () => {
    it('throws error if trying to create an existing elist', () => {
      expect(() => {
        decide(mockExistingState, mockCreateElistCommand);
      }).toThrow(BadRequestException);
    });

    it('creates an ElistCreatedEvent correctly', () => {
      const events = decide(mockInitialState, mockCreateElistCommand);
      expect(events[0]).toBeInstanceOf(ElistCreatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        rank: 5,
      });
    });

    it('throws error if trying to update a non-existing elist', () => {
      expect(() => {
        decide(mockInitialState, mockUpdateElistCommand);
      }).toThrow(BadRequestException);
    });

    it('updates an existing Elist correctly', () => {
      const events = decide(mockExistingState, mockUpdateElistCommand);
      expect(events[0]).toBeInstanceOf(ElistUpdatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
        competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
        rank: 4,
      });
    });

    it('throws error if trying to delete a non-existing elist', () => {
      expect(() => {
        decide(mockInitialState, mockDeleteElistCommand);
      }).toThrow(BadRequestException);
    });

    it('deletes an existing Elist correctly', () => {
      const events = decide(mockExistingState, mockDeleteElistCommand);
      expect(events[0]).toBeInstanceOf(ElistDeletedEvent);
      expect(events[0].data).toEqual({ id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' });
    });
  });

  describe('evolve function', () => {
    it('evolves state for ElistCreatedEvent correctly', () => {
      const mockEvent = new ElistCreatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          rank: 5,
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'elist',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            rank: 5,
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for ElistUpdatedEvent correctly', () => {
      // Mock an initial state that has an existing elist
      const mockExistingState: ElistState = {
        exists: true,
        type: 'elist',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          rank: 5,
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new ElistUpdatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
          competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
          rank: 4,
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'elist',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
            competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
            rank: 4,
            updated_at: expect.any(Date), // Ensure updated_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for ElistDeletedEvent correctly', () => {
      // Mock an initial state that has an existing elist
      const mockExistingState: ElistState = {
        exists: true,
        type: 'elist',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          rank: 5,
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new ElistDeletedEvent(
        { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'elist',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
