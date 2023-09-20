import { BadRequestException } from '@nestjs/common';
import { Metadata } from '../event-store/types/metadata.type';
import { decide, evolve } from './skill.decider';
import { CreateSkillCommand } from './commands/create-skill/create-skill.command';
import { UpdateSkillCommand } from './commands/update-skill/update-skill.command';
import { DeleteSkillCommand } from './commands/delete-skill/delete-skill.command';
import { SkillCreatedEvent } from './events/skill-created/skill-created.event';
import { SkillUpdatedEvent } from './events/skill-updated/skill-updated.event';
import { SkillDeletedEvent } from './events/skill-deleted/skill-deleted.event';
import { CreateSkillInput } from './inputs/create-skill.input';
import { UpdateSkillInput } from './inputs/update-skill.input';
import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { DeleteSkillInput } from './inputs';
import { SkillWriteModel } from './models/skill-write.model';

type SkillState = InitialState | ExistsState<'skill', SkillWriteModel>;

describe('skill.decider', () => {
  const mockInitialState: SkillState = { exists: false };
  const mockExistingState: SkillState = {
    exists: true,
    type: 'skill',
    data: {
      created_at: new Date('2023-08-21T12:00:00Z'),
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      category: 'CLOUD_PLATFORMS',
      name: 'test_name',
      description: 'test_description',
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockCreateSkillInput: CreateSkillInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    category: 'CLOUD_PLATFORMS',
    name: 'test_name',
    description: 'test_description',
  };

  const mockCreateSkillCommand = new CreateSkillCommand(mockCreateSkillInput, mockMetadata);

  const mockUpdateSkillInput: UpdateSkillInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    category: 'COMMUNICATION',
    name: 'test_name_2',
    description: 'test_description_2',
  };

  const mockUpdateSkillCommand = new UpdateSkillCommand(mockUpdateSkillInput, mockMetadata);

  const mockDeleteSkillInput: DeleteSkillInput = { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' };

  const mockDeleteSkillCommand = new DeleteSkillCommand(mockDeleteSkillInput, mockMetadata);

  describe('decide function', () => {
    it('throws error if trying to create an existing skill', () => {
      expect(() => {
        decide(mockExistingState, mockCreateSkillCommand);
      }).toThrow(BadRequestException);
    });

    it('creates an SkillCreatedEvent correctly', () => {
      const events = decide(mockInitialState, mockCreateSkillCommand);
      expect(events[0]).toBeInstanceOf(SkillCreatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        category: 'CLOUD_PLATFORMS',
        name: 'test_name',
        description: 'test_description',
      });
    });

    it('throws error if trying to update a non-existing skill', () => {
      expect(() => {
        decide(mockInitialState, mockUpdateSkillCommand);
      }).toThrow(BadRequestException);
    });

    it('updates an existing Skill correctly', () => {
      const events = decide(mockExistingState, mockUpdateSkillCommand);
      expect(events[0]).toBeInstanceOf(SkillUpdatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        category: 'COMMUNICATION',
        name: 'test_name_2',
        description: 'test_description_2',
      });
    });

    it('throws error if trying to delete a non-existing skill', () => {
      expect(() => {
        decide(mockInitialState, mockDeleteSkillCommand);
      }).toThrow(BadRequestException);
    });

    it('deletes an existing Skill correctly', () => {
      const events = decide(mockExistingState, mockDeleteSkillCommand);
      expect(events[0]).toBeInstanceOf(SkillDeletedEvent);
      expect(events[0].data).toEqual({ id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' });
    });
  });

  describe('evolve function', () => {
    it('evolves state for SkillCreatedEvent correctly', () => {
      const mockEvent = new SkillCreatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          category: 'CLOUD_PLATFORMS',
          name: 'test_name',
          description: 'test_description',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'skill',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            category: 'CLOUD_PLATFORMS',
            name: 'test_name',
            description: 'test_description',
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for SkillUpdatedEvent correctly', () => {
      // Mock an initial state that has an existing skill
      const mockExistingState: SkillState = {
        exists: true,
        type: 'skill',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          category: 'CLOUD_PLATFORMS',
          name: 'test_name',
          description: 'test_description',
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new SkillUpdatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          category: 'COMMUNICATION',
          name: 'test_name_2',
          description: 'test_description_2',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'skill',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            category: 'COMMUNICATION',
            name: 'test_name_2',
            description: 'test_description_2',
            updated_at: expect.any(Date), // Ensure updated_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for SkillDeletedEvent correctly', () => {
      // Mock an initial state that has an existing skill
      const mockExistingState: SkillState = {
        exists: true,
        type: 'skill',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          category: 'CLOUD_PLATFORMS',
          name: 'test_name',
          description: 'test_description',
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new SkillDeletedEvent(
        { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'skill',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
