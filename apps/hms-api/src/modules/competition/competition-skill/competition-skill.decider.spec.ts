import { AssertionError } from 'assert';
import { ExistsState, InitialState } from '../../event-store/types/decider-state.type';
import { Metadata } from '../../event-store/types/metadata.type';
import { decide, evolve } from './competition-skill.decider';
import { AddCompetitionSkillCommand } from './commands/add-competition-skill/add-competition-skill.command';
import { RemoveCompetitionSkillCommand } from './commands/remove-competition-skill/remove-competition-skill.command';
import { CompetitionSkillAddedEvent } from './events/competition-skill-added/competition-skill-added.event';
import { CompetitionSkillRemovedEvent } from './events/competition-skill-removed/competition-skill-removed.event';
import { AddCompetitionSkillInput } from './inputs/add-competition-skill.input';
import { RemoveCompetitionSkillInput } from './inputs/remove-competition-skill.input';
import { CompetitionSkillWriteModel } from './models/competition-skill-write.model';

type State = InitialState | ExistsState<'competition-skill', CompetitionSkillWriteModel>;

describe('competition-skill.decider', () => {
  const mockInitialState: State = { exists: false };
  const mockExistingState: State = {
    exists: true,
    type: 'competition-skill',
    data: {
      created_at: new Date('2023-08-21T12:00:00Z'),
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      min_years_experience: 2,
      is_required: true,
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockAddCompetitionSkillInput: AddCompetitionSkillInput = {
    competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    min_years_experience: 2,
    is_required: true,
  };

  const mockAddCompetitionSkillCommand = new AddCompetitionSkillCommand(mockAddCompetitionSkillInput, mockMetadata);

  const mockRemoveCompetitionSkillInput: RemoveCompetitionSkillInput = {
    competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
  };

  const mockRemoveCompetitionSkillCommand = new RemoveCompetitionSkillCommand(
    mockRemoveCompetitionSkillInput,
    mockMetadata,
  );

  describe('decide function', () => {
    it('throws error if trying to create an existing competition-skill', () => {
      expect(() => {
        decide(mockExistingState, mockAddCompetitionSkillCommand);
      }).toThrow(AssertionError);
    });

    it('creates an CompetitionSkillAdddEvent correctly', () => {
      const events = decide(mockInitialState, mockAddCompetitionSkillCommand);
      expect(events[0]).toBeInstanceOf(CompetitionSkillAddedEvent);
      expect(events[0].data).toEqual({
        competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        min_years_experience: 2,
        is_required: true,
      });
    });

    it('throws error if trying to delete a non-existing competition-skill', () => {
      expect(() => {
        decide(mockInitialState, mockRemoveCompetitionSkillCommand);
      }).toThrow(AssertionError);
    });

    it('deletes an existing CompetitionSkill correctly', () => {
      const events = decide(mockExistingState, mockRemoveCompetitionSkillCommand);
      expect(events[0]).toBeInstanceOf(CompetitionSkillRemovedEvent);
      expect(events[0].data).toEqual({
        competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      });
    });
  });

  describe('evolve function', () => {
    it('evolves state for CompetitionSkillAdddEvent correctly', () => {
      const mockEvent = new CompetitionSkillAddedEvent(
        {
          competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          min_years_experience: 2,
          is_required: true,
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'competition-skill',
          data: expect.objectContaining({
            competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            min_years_experience: 2,
            is_required: true,
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for CompetitionSkillRemovedEvent correctly', () => {
      // Mock an initial state that has an existing competition-skill
      const mockExistingState: State = {
        exists: true,
        type: 'competition-skill',
        data: {
          competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          min_years_experience: 2,
          is_required: true,
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new CompetitionSkillRemovedEvent(
        { competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852' },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'competition-skill',
          data: expect.objectContaining({
            competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
