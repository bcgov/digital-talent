import { AssertionError } from 'assert';
import { Metadata } from '../event-store/types/metadata.type';
import { State, decide, evolve } from './job-description.decider';
import { CreateJobDescriptionCommand } from './commands/create-job-description/create-job-description.command';
import { UpdateJobDescriptionCommand } from './commands/update-job-description/update-job-description.command';
import { DeleteJobDescriptionCommand } from './commands/delete-job-description/delete-job-description.command';
import { JobDescriptionCreatedEvent } from './events/job-description-created/job-description-created.event';
import { JobDescriptionUpdatedEvent } from './events/job-description-updated/job-description-updated.event';
import { JobDescriptionDeletedEvent } from './events/job-description-deleted/job-description-deleted.event';
import { CreateJobDescriptionInput } from './inputs/create-job-description.input';
import { DeleteJobDescriptionInput } from './inputs/delete-job-description.input';
import { UpdateJobDescriptionInput } from './inputs/update-job-description.input';

describe('job-description.decider', () => {
  const mockInitialState: State = { exists: false };
  const mockExistingState: State = {
    exists: true,
    type: 'job-description',
    data: {
      created_at: new Date('2023-08-21T12:00:00Z'),
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      e_class_id: 'test_e_class_id',
      name: 'test_name',
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockCreateJobDescriptionInput: CreateJobDescriptionInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    e_class_id: 'test_e_class_id',
    name: 'test_name',
  };

  const mockCreateJobDescriptionCommand = new CreateJobDescriptionCommand(mockCreateJobDescriptionInput, mockMetadata);

  const mockUpdateJobDescriptionInput: UpdateJobDescriptionInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
    e_class_id: 'test_e_class_id_2',
    name: 'test_name_2',
  };

  const mockUpdateJobDescriptionCommand = new UpdateJobDescriptionCommand(mockUpdateJobDescriptionInput, mockMetadata);

  const mockDeleteJobDescriptionInput: DeleteJobDescriptionInput = { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' };

  const mockDeleteJobDescriptionCommand = new DeleteJobDescriptionCommand(mockDeleteJobDescriptionInput, mockMetadata);

  describe('decide function', () => {
    it('throws error if trying to create an existing job-description', () => {
      expect(() => {
        decide(mockExistingState, mockCreateJobDescriptionCommand);
      }).toThrow(AssertionError);
    });

    it('creates an JobDescriptionCreatedEvent correctly', () => {
      const events = decide(mockInitialState, mockCreateJobDescriptionCommand);
      expect(events[0]).toBeInstanceOf(JobDescriptionCreatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        e_class_id: 'test_e_class_id',
        name: 'test_name',
      });
    });

    it('throws error if trying to update a non-existing job-description', () => {
      expect(() => {
        decide(mockInitialState, mockUpdateJobDescriptionCommand);
      }).toThrow(AssertionError);
    });

    it('updates an existing JobDescription correctly', () => {
      const events = decide(mockExistingState, mockUpdateJobDescriptionCommand);
      expect(events[0]).toBeInstanceOf(JobDescriptionUpdatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
        e_class_id: 'test_e_class_id_2',
        name: 'test_name_2',
      });
    });

    it('throws error if trying to delete a non-existing job-description', () => {
      expect(() => {
        decide(mockInitialState, mockDeleteJobDescriptionCommand);
      }).toThrow(AssertionError);
    });

    it('deletes an existing JobDescription correctly', () => {
      const events = decide(mockExistingState, mockDeleteJobDescriptionCommand);
      expect(events[0]).toBeInstanceOf(JobDescriptionDeletedEvent);
      expect(events[0].data).toEqual({ id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' });
    });
  });

  describe('evolve function', () => {
    it('evolves state for JobDescriptionCreatedEvent correctly', () => {
      const mockEvent = new JobDescriptionCreatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          e_class_id: 'test_e_class_id',
          name: 'test_name',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'job-description',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            e_class_id: 'test_e_class_id',
            name: 'test_name',
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for JobDescriptionUpdatedEvent correctly', () => {
      // Mock an initial state that has an existing job-description
      const mockExistingState: State = {
        exists: true,
        type: 'job-description',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          e_class_id: 'test_e_class_id',
          name: 'test_name',
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new JobDescriptionUpdatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
          e_class_id: 'test_e_class_id_2',
          name: 'test_name_2',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'job-description',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
            e_class_id: 'test_e_class_id_2',
            name: 'test_name_2',
            updated_at: expect.any(Date), // Ensure updated_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for JobDescriptionDeletedEvent correctly', () => {
      // Mock an initial state that has an existing job-description
      const mockExistingState: State = {
        exists: true,
        type: 'job-description',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          e_class_id: 'test_e_class_id',
          name: 'test_name',
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new JobDescriptionDeletedEvent(
        { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'job-description',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
