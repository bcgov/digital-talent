import { BadRequestException } from '@nestjs/common';
import { Metadata } from '../../event-store/types/metadata.type';
import { State, decide, evolve } from './competition.decider';
import { CreateCompetitionCommand } from './commands/create-competition/create-competition.command';
import { UpdateCompetitionCommand } from './commands/update-competition/update-competition.command';
import { DeleteCompetitionCommand } from './commands/delete-competition/delete-competition.command';
import { CompetitionCreatedEvent } from './events/competition-created/competition-created.event';
import { CompetitionUpdatedEvent } from './events/competition-updated/competition-updated.event';
import { CompetitionDeletedEvent } from './events/competition-deleted/competition-deleted.event';
import { CreateCompetitionInput } from './inputs/create-competition.input';
import { DeleteCompetitionInput } from './inputs/delete-competition.input';
import { UpdateCompetitionInput } from './inputs/update-competition.input';
import { CompetitionStateUpdatedEvent } from './events/competition-state-updated/competition-state-updated.event';
import { UpdateCompetitionStateInput } from './inputs/update-competition-state.input';
import { UpdateCompetitionStateCommand } from './commands/update-competition-state/update-competition-state.command';

describe('competition.decider', () => {
  const mockInitialState: State = { exists: false };
  const mockExistingState: State = {
    exists: true,
    type: 'competition',
    data: {
      created_at: new Date('2023-08-21T12:00:00Z'),
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      recruiter_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      category: 'CMH',
      state: 'DRAFT',
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockCreateCompetitionInput: CreateCompetitionInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    recruiter_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    category: 'CMH',
  };

  const mockCreateCompetitionCommand = new CreateCompetitionCommand(mockCreateCompetitionInput, mockMetadata);

  const mockUpdateCompetitionInput: UpdateCompetitionInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    classification_id: 'd290f1ee-6c54-4b01-90e6-d703748f0852',
    deltek_id: 'd290f1ee-6c54-4b01-90e6-d70173f0852',
    recruiter_id: 'd290f1ee-6c54-4b01-90e6-d301748f0852',
    category: 'RH',
  };

  const mockUpdateCompetitionCommand = new UpdateCompetitionCommand(mockUpdateCompetitionInput, mockMetadata);

  const mockUpdateCompetitionStateInput: UpdateCompetitionStateInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    state: 'PUBLISHED',
  };

  const mockUpdateCompetitionStateCommand = new UpdateCompetitionStateCommand(
    mockUpdateCompetitionStateInput,
    mockMetadata,
  );

  const mockDeleteCompetitionInput: DeleteCompetitionInput = { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' };

  const mockDeleteCompetitionCommand = new DeleteCompetitionCommand(mockDeleteCompetitionInput, mockMetadata);

  describe('decide function', () => {
    it('throws error if trying to create an existing competition', () => {
      expect(() => {
        decide(mockExistingState, mockCreateCompetitionCommand);
      }).toThrow(BadRequestException);
    });

    it('creates an CompetitionCreatedEvent correctly', () => {
      const events = decide(mockInitialState, mockCreateCompetitionCommand);
      expect(events[0]).toBeInstanceOf(CompetitionCreatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        recruiter_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        category: 'CMH',
      });
    });

    it('throws error if trying to update a non-existing competition', () => {
      expect(() => {
        decide(mockInitialState, mockUpdateCompetitionCommand);
      }).toThrow(BadRequestException);
    });

    it('updates an existing Competition correctly', () => {
      const events = decide(mockExistingState, mockUpdateCompetitionCommand);
      expect(events[0]).toBeInstanceOf(CompetitionUpdatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        classification_id: 'd290f1ee-6c54-4b01-90e6-d703748f0852',
        deltek_id: 'd290f1ee-6c54-4b01-90e6-d70173f0852',
        recruiter_id: 'd290f1ee-6c54-4b01-90e6-d301748f0852',
        category: 'RH',
      });
    });

    it('updates competition state of a Competition correctly', () => {
      const events = decide(mockExistingState, mockUpdateCompetitionStateCommand);
      expect(events[0]).toBeInstanceOf(CompetitionStateUpdatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        state: 'PUBLISHED',
      });
    });

    it('throws error if trying to delete a non-existing competition', () => {
      expect(() => {
        decide(mockInitialState, mockDeleteCompetitionCommand);
      }).toThrow(BadRequestException);
    });

    it('deletes an existing Competition correctly', () => {
      const events = decide(mockExistingState, mockDeleteCompetitionCommand);
      expect(events[0]).toBeInstanceOf(CompetitionDeletedEvent);
      expect(events[0].data).toEqual({ id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' });
    });
  });

  describe('evolve function', () => {
    it('evolves state for CompetitionCreatedEvent correctly', () => {
      const mockEvent = new CompetitionCreatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          classification_id: 'd290f1ee-6c54-4b01-90e6-d703748f0852',
          deltek_id: 'd290f1ee-6c54-4b01-90e6-d70173f0852',
          recruiter_id: 'd290f1ee-6c54-4b01-90e6-d301748f0852',
          category: 'RH',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'competition',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            classification_id: 'd290f1ee-6c54-4b01-90e6-d703748f0852',
            deltek_id: 'd290f1ee-6c54-4b01-90e6-d70173f0852',
            recruiter_id: 'd290f1ee-6c54-4b01-90e6-d301748f0852',
            category: 'RH',
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for CompetitionUpdatedEvent correctly', () => {
      // Mock an initial state that has an existing competition
      const mockExistingState: State = {
        exists: true,
        type: 'competition',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          classification_id: 'd290f1ee-6c54-4b01-90e6-d703748f0852',
          deltek_id: 'd290f1ee-6c54-4b01-90e6-d70173f0852',
          recruiter_id: 'd290f1ee-6c54-4b01-90e6-d301748f0852',
          category: 'RH',
          state: 'DRAFT',
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new CompetitionUpdatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701743f0851',
          classification_id: 'd290f1ee-6c54-4b01-90e6-d743748f0852',
          deltek_id: 'd290f1ee-6c54-4b01-90e6-d7017350852',
          recruiter_id: 'd290f1ee-6c54-4b01-90e6-d301748s0852',
          category: 'CMH',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'competition',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701743f0851',
            classification_id: 'd290f1ee-6c54-4b01-90e6-d743748f0852',
            deltek_id: 'd290f1ee-6c54-4b01-90e6-d7017350852',
            recruiter_id: 'd290f1ee-6c54-4b01-90e6-d301748s0852',
            category: 'CMH',
            updated_at: expect.any(Date), // Ensure updated_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for UpdateCompetitionStateCommand correctly', () => {
      // Mock an initial state that has an existing competition
      const mockExistingState: State = {
        exists: true,
        type: 'competition',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          classification_id: 'd290f1ee-6c54-4b01-90e6-d703748f0852',
          deltek_id: 'd290f1ee-6c54-4b01-90e6-d70173f0852',
          recruiter_id: 'd290f1ee-6c54-4b01-90e6-d301748f0852',
          category: 'RH',
          state: 'DRAFT',
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new CompetitionStateUpdatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          state: 'PUBLISHED',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'competition',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            classification_id: 'd290f1ee-6c54-4b01-90e6-d703748f0852',
            deltek_id: 'd290f1ee-6c54-4b01-90e6-d70173f0852',
            recruiter_id: 'd290f1ee-6c54-4b01-90e6-d301748f0852',
            category: 'RH',
            state: 'PUBLISHED',
            updated_at: expect.any(Date), // Ensure updated_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for CompetitionDeletedEvent correctly', () => {
      // Mock an initial state that has an existing competition
      const mockExistingState: State = {
        exists: true,
        type: 'competition',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701743f0851',
          classification_id: 'd290f1ee-6c54-4b01-90e6-d743748f0852',
          deltek_id: 'd290f1ee-6c54-4b01-90e6-d7017350852',
          recruiter_id: 'd290f1ee-6c54-4b01-90e6-d301748s0852',
          category: 'CMH',
          state: 'DRAFT',
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new CompetitionDeletedEvent(
        { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'competition',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
