import { BadRequestException } from '@nestjs/common';
import { Metadata } from '../../event-store/types/metadata.type';
import { ApplicationState, decide, evolve } from './application.decider';
import { CreateApplicationCommand } from './commands/create-application/create-application.command';
import { DeleteApplicationCommand } from './commands/delete-application/delete-application.command';
import { UpdateApplicationCommand } from './commands/update-application/update-application.command';
import { ApplicationCreatedEvent } from './events/application-created/application-created.event';
import { ApplicationDeletedEvent } from './events/application-deleted/application-deleted.event';
import { ApplicationUpdatedEvent } from './events/application-updated/application-updated.event';
import { CreateApplicationInput } from './inputs/create-application.input';
import { DeleteApplicationInput } from './inputs/delete-application.input';
import { UpdateApplicationInput } from './inputs/update-application.input';

describe('application.decider', () => {
  const mockInitialState: ApplicationState = { exists: false };
  const mockExistingState: ApplicationState = {
    exists: true,
    type: 'application',
    data: {
      id: 'mockId',
      created_at: new Date('2023-08-21T12:00:00Z'),
      applicant_id: 'mockApplicantId',
      json: { a: 1, b: 2 },
      updated_at: null,
      deleted_at: null,
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockCreateApplicationInput: CreateApplicationInput = {
    id: 'mockId',
    applicant_id: 'mockApplicantId',
    json: {},
  };

  const mockCreateApplicationCommand = new CreateApplicationCommand(mockCreateApplicationInput, mockMetadata);

  const mockUpdateApplicationInput: UpdateApplicationInput = {
    id: 'mockId',
    applicant_id: 'newMockApplicantId',
  };

  const mockUpdateApplicationCommand = new UpdateApplicationCommand(mockUpdateApplicationInput, mockMetadata);

  const mockUpdateApplicationInputJson: UpdateApplicationInput = {
    id: 'mockId',
    json: { c: 1 },
  };

  const mockUpdateApplicationCommandJson = new UpdateApplicationCommand(mockUpdateApplicationInputJson, mockMetadata);

  const mockDeleteApplicationInput: DeleteApplicationInput = { id: 'mockId' };

  const mockDeleteApplicationCommand = new DeleteApplicationCommand(mockDeleteApplicationInput, mockMetadata);

  describe('decide function', () => {
    it('throws error if trying to create an existing application', () => {
      expect(() => {
        decide(mockExistingState, mockCreateApplicationCommand);
      }).toThrow(BadRequestException);
    });

    it('creates an ApplicationCreatedEvent correctly', () => {
      const events = decide(mockInitialState, mockCreateApplicationCommand);
      expect(events[0]).toBeInstanceOf(ApplicationCreatedEvent);
      expect(events[0].data).toEqual({ id: 'mockId', applicant_id: 'mockApplicantId', json: {} });
    });

    it('throws error if trying to update a non-existing application', () => {
      expect(() => {
        decide(mockInitialState, mockUpdateApplicationCommand);
      }).toThrow(BadRequestException);
    });

    it('updates an existing Application correctly', () => {
      const events = decide(mockExistingState, mockUpdateApplicationCommand);
      expect(events[0]).toBeInstanceOf(ApplicationUpdatedEvent);
      expect(events[0].data).toEqual({ id: 'mockId', applicant_id: 'newMockApplicantId' });
    });

    it('updates an existing Application json correctly', () => {
      const events = decide(mockExistingState, mockUpdateApplicationCommandJson);
      expect(events[0]).toBeInstanceOf(ApplicationUpdatedEvent);
      expect(events[0].data).toEqual({ id: 'mockId', json: { c: 1 } });
    });

    it('throws error if trying to delete a non-existing application', () => {
      expect(() => {
        decide(mockInitialState, mockDeleteApplicationCommand);
      }).toThrow(BadRequestException);
    });

    it('deletes an existing Application correctly', () => {
      const events = decide(mockExistingState, mockDeleteApplicationCommand);
      expect(events[0]).toBeInstanceOf(ApplicationDeletedEvent);
      expect(events[0].data).toEqual({ id: 'mockId' });
    });
  });

  describe('evolve function', () => {
    it('evolves state for ApplicationCreatedEvent correctly', () => {
      const mockEvent = new ApplicationCreatedEvent(
        { id: 'mockId', applicant_id: 'mockApplicantId', json: {} },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'application',
          data: expect.objectContaining({
            id: 'mockId',
            applicant_id: 'mockApplicantId',
            json: {},
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for ApplicationUpdatedEvent correctly', () => {
      // Mock an initial state that has an existing application
      const mockExistingState: ApplicationState = {
        exists: true,
        type: 'application',
        data: {
          id: 'mockId',
          applicant_id: 'mockApplicantId',
          json: {},
          created_at: new Date('2023-08-21T10:00:00Z'),
          updated_at: null,
          deleted_at: null,
        },
      };

      const mockEvent = new ApplicationUpdatedEvent(
        { id: 'mockId', applicant_id: 'newMockApplicantId' },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'application',
          data: expect.objectContaining({
            id: 'mockId',
            applicant_id: 'newMockApplicantId',
            json: {},
            updated_at: expect.any(Date), // Ensure updated_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for ApplicationDeletedEvent correctly', () => {
      // Mock an initial state that has an existing application
      const mockExistingState: ApplicationState = {
        exists: true,
        type: 'application',
        data: {
          id: 'mockId',
          applicant_id: 'mockApplicantId',
          json: {},
          created_at: new Date('2023-08-21T10:00:00Z'),
          updated_at: null,
          deleted_at: null,
        },
      };

      const mockEvent = new ApplicationDeletedEvent(
        { id: 'mockId' },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'application',
          data: expect.objectContaining({
            id: 'mockId',
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
