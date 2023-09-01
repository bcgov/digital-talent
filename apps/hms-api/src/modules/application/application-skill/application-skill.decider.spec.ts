import { BadRequestException } from '@nestjs/common';
import { Metadata } from '../../event-store/types/metadata.type';
import { ApplicationSkillState, decide, evolve } from './application-skill.decider';
import { CreateApplicationSkillCommand } from './commands/create-application-skill/create-application-skill.command';
import { UpdateApplicationSkillCommand } from './commands/update-application-skill/update-application-skill.command';
import { DeleteApplicationSkillCommand } from './commands/delete-application-skill/delete-application-skill.command';
import { ApplicationSkillCreatedEvent } from './events/application-skill-created/application-skill-created.event';
import { ApplicationSkillUpdatedEvent } from './events/application-skill-updated/application-skill-updated.event';
import { ApplicationSkillDeletedEvent } from './events/application-skill-deleted/application-skill-deleted.event';
import { CreateApplicationSkillInput } from './inputs/create-application-skill.input';
import { DeleteApplicationSkillInput } from './inputs/delete-application-skill.input';
import { UpdateApplicationSkillInput } from './inputs/update-application-skill.input';

describe('application-skill.decider', () => {
  const mockInitialState: ApplicationSkillState = { exists: false };
  const mockExistingState: ApplicationSkillState = {
    exists: true,
    type: 'application-skill',
    data: {
      application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
      skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852', // example UUID
      years_experience: 5,
      description: 'mock description',
      created_at: new Date('2023-08-21T12:00:00Z'),
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockCreateApplicationSkillInput: CreateApplicationSkillInput = {
    application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
    skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852', // example UUID
    years_experience: 5,
    description: 'mock description',
  };

  const mockCreateApplicationSkillCommand = new CreateApplicationSkillCommand(
    mockCreateApplicationSkillInput,
    mockMetadata,
  );

  const mockUpdateApplicationSkillInput: UpdateApplicationSkillInput = {
    application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
    skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852', // example UUID
    years_experience: 6,
    description: 'new mock description',
  };

  const mockUpdateApplicationSkillCommand = new UpdateApplicationSkillCommand(
    mockUpdateApplicationSkillInput,
    mockMetadata,
  );

  const mockDeleteApplicationSkillInput: DeleteApplicationSkillInput = {
    application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
    skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852', // example UUID
  };

  const mockDeleteApplicationSkillCommand = new DeleteApplicationSkillCommand(
    mockDeleteApplicationSkillInput,
    mockMetadata,
  );

  describe('decide function', () => {
    it('throws error if trying to create an existing application-skill', () => {
      expect(() => {
        decide(mockExistingState, mockCreateApplicationSkillCommand);
      }).toThrow(BadRequestException);
    });

    it('creates an ApplicationSkillCreatedEvent correctly', () => {
      const events = decide(mockInitialState, mockCreateApplicationSkillCommand);
      expect(events[0]).toBeInstanceOf(ApplicationSkillCreatedEvent);
      expect(events[0].data).toEqual({
        application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
        skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852', // example UUID
        years_experience: 5,
        description: 'mock description',
      });
    });

    it('throws error if trying to update a non-existing application-skill', () => {
      expect(() => {
        decide(mockInitialState, mockUpdateApplicationSkillCommand);
      }).toThrow(BadRequestException);
    });

    it('updates an existing ApplicationSkill correctly', () => {
      const events = decide(mockExistingState, mockUpdateApplicationSkillCommand);
      expect(events[0]).toBeInstanceOf(ApplicationSkillUpdatedEvent);
      expect(events[0].data).toEqual({
        application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
        skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852', // example UUID
        years_experience: 6,
        description: 'new mock description',
      });
    });

    it('throws error if trying to delete a non-existing application-skill', () => {
      expect(() => {
        decide(mockInitialState, mockDeleteApplicationSkillCommand);
      }).toThrow(BadRequestException);
    });

    it('deletes an existing ApplicationSkill correctly', () => {
      const events = decide(mockExistingState, mockDeleteApplicationSkillCommand);
      expect(events[0]).toBeInstanceOf(ApplicationSkillDeletedEvent);
      expect(events[0].data).toEqual({
        application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
        skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852', // example UUID
      });
    });
  });

  describe('evolve function', () => {
    it('evolves state for ApplicationSkillCreatedEvent correctly', () => {
      const mockEvent = new ApplicationSkillCreatedEvent(
        {
          application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
          skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852', // example UUID
          years_experience: 6,
          description: 'new mock description',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'application-skill',
          data: expect.objectContaining({
            application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
            skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852', // example UUID
            years_experience: 6,
            description: 'new mock description',
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for ApplicationSkillUpdatedEvent correctly', () => {
      // Mock an initial state that has an existing application-skill
      const mockExistingState: ApplicationSkillState = {
        exists: true,
        type: 'application-skill',
        data: {
          application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
          skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852', // example UUID
          years_experience: 6,
          description: 'new mock description',
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new ApplicationSkillUpdatedEvent(
        {
          application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
          skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852', // example UUID
          years_experience: 7,
          description: 'new mock description2',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'application-skill',
          data: expect.objectContaining({
            application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
            skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852', // example UUID
            years_experience: 7,
            description: 'new mock description2',
            updated_at: expect.any(Date), // Ensure updated_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for ApplicationSkillDeletedEvent correctly', () => {
      // Mock an initial state that has an existing application-skill
      const mockExistingState: ApplicationSkillState = {
        exists: true,
        type: 'application-skill',
        data: {
          application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
          skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852', // example UUID
          years_experience: 7,
          description: 'new mock description2',
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new ApplicationSkillDeletedEvent(
        {
          application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
          skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852', // example UUID
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'application-skill',
          data: expect.objectContaining({
            application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
            skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852', // example UUID
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
