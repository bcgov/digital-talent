import { BadRequestException } from '@nestjs/common';
import { Metadata } from '../../event-store/types/metadata.type';
import { CreateOpportunitySkillCommand } from './commands/create-opportunity-skill/create-opportunity-skill.command';
import { DeleteOpportunitySkillCommand } from './commands/delete-opportunity-skill/delete-opportunity-skill.command';
import { OpportunitySkillCreatedEvent } from './events/opportunity-skill-created/opportunity-skill-created.event';
import { OpportunitySkillDeletedEvent } from './events/opportunity-skill-deleted/opportunity-skill-deleted.event';
import { CreateOpportunitySkillInput } from './inputs/create-opportunity-skill.input';
import { DeleteOpportunitySkillInput } from './inputs/delete-opportunity-skill.input';
import { OpportunitySkillState, decide, evolve } from './opportunity-skill.decider';

describe('opportunity-skill.decider', () => {
  const mockInitialState: OpportunitySkillState = { exists: false };
  const mockExistingState: OpportunitySkillState = {
    exists: true,
    type: 'opportunity-skill',
    data: {
      created_at: new Date('2023-08-21T12:00:00Z'),
      opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockCreateOpportunitySkillInput: CreateOpportunitySkillInput = {
    opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
  };

  const mockCreateOpportunitySkillCommand = new CreateOpportunitySkillCommand(
    mockCreateOpportunitySkillInput,
    mockMetadata,
  );

  const mockDeleteOpportunitySkillInput: DeleteOpportunitySkillInput = {
    opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
  };

  const mockDeleteOpportunitySkillCommand = new DeleteOpportunitySkillCommand(
    mockDeleteOpportunitySkillInput,
    mockMetadata,
  );

  describe('decide function', () => {
    it('throws error if trying to create an existing opportunity-skill', () => {
      expect(() => {
        decide(mockExistingState, mockCreateOpportunitySkillCommand);
      }).toThrow(BadRequestException);
    });

    it('creates an OpportunitySkillCreatedEvent correctly', () => {
      const events = decide(mockInitialState, mockCreateOpportunitySkillCommand);
      expect(events[0]).toBeInstanceOf(OpportunitySkillCreatedEvent);
      expect(events[0].data).toEqual({
        opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      });
    });

    it('throws error if trying to delete a non-existing opportunity-skill', () => {
      expect(() => {
        decide(mockInitialState, mockDeleteOpportunitySkillCommand);
      }).toThrow(BadRequestException);
    });

    it('deletes an existing OpportunitySkill correctly', () => {
      const events = decide(mockExistingState, mockDeleteOpportunitySkillCommand);
      expect(events[0]).toBeInstanceOf(OpportunitySkillDeletedEvent);
      expect(events[0].data).toEqual({
        opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      });
    });
  });

  describe('evolve function', () => {
    it('evolves state for OpportunitySkillCreatedEvent correctly', () => {
      const mockEvent = new OpportunitySkillCreatedEvent(
        {
          opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'opportunity-skill',
          data: {
            opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          },
        }),
      );
    });

    it('evolves state for OpportunitySkillDeletedEvent correctly', () => {
      // Mock an initial state that has an existing opportunity-skill
      const mockExistingState: OpportunitySkillState = {
        exists: true,
        type: 'opportunity-skill',
        data: {
          created_at: new Date('2023-08-21T12:00:00Z'),
          opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        },
      };

      const mockEvent = new OpportunitySkillDeletedEvent(
        { opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852' },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'opportunity-skill',
          data: expect.objectContaining({
            created_at: new Date('2023-08-21T12:00:00Z'),
            opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
