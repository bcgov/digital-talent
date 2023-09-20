import { BadRequestException } from '@nestjs/common';
import { Metadata } from '../event-store/types/metadata.type';
import { CompetitionScheduleState, decide, evolve } from './competition-schedule.decider';
import { CreateCompetitionScheduleCommand } from './commands/create-competition-schedule/create-competition-schedule.command';
import { UpdateCompetitionScheduleCommand } from './commands/update-competition-schedule/update-competition-schedule.command';
import { DeleteCompetitionScheduleCommand } from './commands/delete-competition-schedule/delete-competition-schedule.command';
import { CompetitionScheduleCreatedEvent } from './events/competition-schedule-created/competition-schedule-created.event';
import { CompetitionScheduleUpdatedEvent } from './events/competition-schedule-updated/competition-schedule-updated.event';
import { CompetitionScheduleDeletedEvent } from './events/competition-schedule-deleted/competition-schedule-deleted.event';
import { CreateCompetitionScheduleInput } from './inputs/create-competition-schedule.input';
import { DeleteCompetitionScheduleInput } from './inputs/delete-competition-schedule.input';
import { UpdateCompetitionScheduleInput } from './inputs/update-competition-schedule.input';

describe('competition-schedule.decider', () => {
  const mockInitialState: CompetitionScheduleState = { exists: false };
  const mockExistingState: CompetitionScheduleState = {
    exists: true,
    type: 'competition-schedule',
    data: {
      created_at: new Date('2023-08-21T12:00:00Z'),
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      start_at: new Date('2023-08-21T12:00:00Z'),
      end_at: new Date('2023-08-21T12:00:00Z'),
      state: 'DRAFT',
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockCreateCompetitionScheduleInput: CreateCompetitionScheduleInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    start_at: new Date('2023-08-21T12:00:00Z'),
    end_at: new Date('2023-08-21T12:00:00Z'),
    state: 'DRAFT',
  };

  const mockCreateCompetitionScheduleCommand = new CreateCompetitionScheduleCommand(
    mockCreateCompetitionScheduleInput,
    mockMetadata,
  );

  const mockUpdateCompetitionScheduleInput: UpdateCompetitionScheduleInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    competition_id: 'd290f1ee-6c54-4201-90e6-d701748f0852',
    start_at: new Date('2023-02-21T12:00:00Z'),
    end_at: new Date('2023-02-21T12:00:00Z'),
    state: 'PUBLISHED',
  };

  const mockUpdateCompetitionScheduleCommand = new UpdateCompetitionScheduleCommand(
    mockUpdateCompetitionScheduleInput,
    mockMetadata,
  );

  const mockDeleteCompetitionScheduleInput: DeleteCompetitionScheduleInput = { id: 'mockId' };

  const mockDeleteCompetitionScheduleCommand = new DeleteCompetitionScheduleCommand(
    mockDeleteCompetitionScheduleInput,
    mockMetadata,
  );

  describe('decide function', () => {
    it('throws error if trying to create an existing competition-schedule', () => {
      expect(() => {
        decide(mockExistingState, mockCreateCompetitionScheduleCommand);
      }).toThrow(BadRequestException);
    });

    it('creates an CompetitionScheduleCreatedEvent correctly', () => {
      const events = decide(mockInitialState, mockCreateCompetitionScheduleCommand);
      expect(events[0]).toBeInstanceOf(CompetitionScheduleCreatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        start_at: new Date('2023-08-21T12:00:00Z'),
        end_at: new Date('2023-08-21T12:00:00Z'),
        state: 'DRAFT',
      });
    });

    it('throws error if trying to update a non-existing competition-schedule', () => {
      expect(() => {
        decide(mockInitialState, mockUpdateCompetitionScheduleCommand);
      }).toThrow(BadRequestException);
    });

    it('updates an existing CompetitionSchedule correctly', () => {
      const events = decide(mockExistingState, mockUpdateCompetitionScheduleCommand);
      expect(events[0]).toBeInstanceOf(CompetitionScheduleUpdatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        competition_id: 'd290f1ee-6c54-4201-90e6-d701748f0852',
        start_at: new Date('2023-02-21T12:00:00Z'),
        end_at: new Date('2023-02-21T12:00:00Z'),
        state: 'PUBLISHED',
      });
    });

    it('throws error if trying to delete a non-existing competition-schedule', () => {
      expect(() => {
        decide(mockInitialState, mockDeleteCompetitionScheduleCommand);
      }).toThrow(BadRequestException);
    });

    it('deletes an existing CompetitionSchedule correctly', () => {
      const events = decide(mockExistingState, mockDeleteCompetitionScheduleCommand);
      expect(events[0]).toBeInstanceOf(CompetitionScheduleDeletedEvent);
      expect(events[0].data).toEqual({ id: 'mockId' });
    });
  });

  describe('evolve function', () => {
    it('evolves state for CompetitionScheduleCreatedEvent correctly', () => {
      const mockEvent = new CompetitionScheduleCreatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          competition_id: 'd290f1ee-6c54-4201-90e6-d701748f0852',
          start_at: new Date('2023-02-21T12:00:00Z'),
          end_at: new Date('2023-02-21T12:00:00Z'),
          state: 'PUBLISHED',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'competition-schedule',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            competition_id: 'd290f1ee-6c54-4201-90e6-d701748f0852',
            start_at: new Date('2023-02-21T12:00:00Z'),
            end_at: new Date('2023-02-21T12:00:00Z'),
            state: 'PUBLISHED',
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for CompetitionScheduleUpdatedEvent correctly', () => {
      // Mock an initial state that has an existing competition-schedule
      const mockExistingState: CompetitionScheduleState = {
        exists: true,
        type: 'competition-schedule',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          competition_id: 'd290f1ee-6c54-4201-90e6-d701748f0852',
          start_at: new Date('2023-02-21T12:00:00Z'),
          end_at: new Date('2023-02-21T12:00:00Z'),
          state: 'PUBLISHED',
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new CompetitionScheduleUpdatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          competition_id: 'd290f1ee-6c54-4201-90e6-d731748f0852',
          start_at: new Date('2023-04-21T12:00:00Z'),
          end_at: new Date('2023-04-21T12:00:00Z'),
          state: 'PUBLISHED',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'competition-schedule',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            competition_id: 'd290f1ee-6c54-4201-90e6-d731748f0852',
            start_at: new Date('2023-04-21T12:00:00Z'),
            end_at: new Date('2023-04-21T12:00:00Z'),
            state: 'PUBLISHED',
          }),
        }),
      );
    });

    it('evolves state for CompetitionScheduleDeletedEvent correctly', () => {
      // Mock an initial state that has an existing competition-schedule
      const mockExistingState: CompetitionScheduleState = {
        exists: true,
        type: 'competition-schedule',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          competition_id: 'd290f1ee-6c54-4201-90e6-d731748f0852',
          start_at: new Date('2023-04-21T12:00:00Z'),
          end_at: new Date('2023-04-21T12:00:00Z'),
          state: 'PUBLISHED',
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new CompetitionScheduleDeletedEvent(
        { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'competition-schedule',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
