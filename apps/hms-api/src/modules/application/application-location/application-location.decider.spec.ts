import { BadRequestException } from '@nestjs/common';
import { Metadata } from '../../event-store/types/metadata.type';
import { ApplicationLocationState, decide, evolve } from './application-location.decider';
import { CreateApplicationLocationCommand } from './commands/create-application-location/create-application-location.command';
import { UpdateApplicationLocationCommand } from './commands/update-application-location/update-application-location.command';
import { DeleteApplicationLocationCommand } from './commands/delete-application-location/delete-application-location.command';
import { ApplicationLocationCreatedEvent } from './events/application-location-created/application-location-created.event';
import { ApplicationLocationUpdatedEvent } from './events/application-location-updated/application-location-updated.event';
import { ApplicationLocationDeletedEvent } from './events/application-location-deleted/application-location-deleted.event';
import { CreateApplicationLocationInput } from './inputs/create-application-location.input';
import { DeleteApplicationLocationInput } from './inputs/delete-application-location.input';
import { UpdateApplicationLocationInput } from './inputs/update-application-location.input';

describe('application-location.decider', () => {
  const mockInitialState: ApplicationLocationState = { exists: false };
  const mockExistingState: ApplicationLocationState = {
    exists: true,
    type: 'application-location',
    data: {
      location_id: 'mockId',
      application_id: 'mockId',
      rank: 5,
      created_at: new Date('2023-08-21T12:00:00Z'),
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockCreateApplicationLocationInput: CreateApplicationLocationInput = {
    location_id: 'mockId',
    application_id: 'mockId',
    rank: 5,
  };

  const mockCreateApplicationLocationCommand = new CreateApplicationLocationCommand(
    mockCreateApplicationLocationInput,
    mockMetadata,
  );

  const mockUpdateApplicationLocationInput: UpdateApplicationLocationInput = {
    location_id: 'mockId',
    application_id: 'mockId',
    rank: 3,
  };

  const mockUpdateApplicationLocationCommand = new UpdateApplicationLocationCommand(
    mockUpdateApplicationLocationInput,
    mockMetadata,
  );

  const mockDeleteApplicationLocationInput: DeleteApplicationLocationInput = {
    location_id: 'mockId',
    application_id: 'mockId',
  };

  const mockDeleteApplicationLocationCommand = new DeleteApplicationLocationCommand(
    mockDeleteApplicationLocationInput,
    mockMetadata,
  );

  describe('decide function', () => {
    it('throws error if trying to create an existing application-location', () => {
      expect(() => {
        decide(mockExistingState, mockCreateApplicationLocationCommand);
      }).toThrow(BadRequestException);
    });

    it('creates an ApplicationLocationCreatedEvent correctly', () => {
      const events = decide(mockInitialState, mockCreateApplicationLocationCommand);
      expect(events[0]).toBeInstanceOf(ApplicationLocationCreatedEvent);
      expect(events[0].data).toEqual({ location_id: 'mockId', application_id: 'mockId', rank: 5 });
    });

    it('throws error if trying to update a non-existing application-location', () => {
      expect(() => {
        decide(mockInitialState, mockUpdateApplicationLocationCommand);
      }).toThrow(BadRequestException);
    });

    it('updates an existing ApplicationLocation correctly', () => {
      const events = decide(mockExistingState, mockUpdateApplicationLocationCommand);
      expect(events[0]).toBeInstanceOf(ApplicationLocationUpdatedEvent);
      expect(events[0].data).toEqual({ location_id: 'mockId', application_id: 'mockId', rank: 3 });
    });

    it('throws error if trying to delete a non-existing application-location', () => {
      expect(() => {
        decide(mockInitialState, mockDeleteApplicationLocationCommand);
      }).toThrow(BadRequestException);
    });

    it('deletes an existing ApplicationLocation correctly', () => {
      const events = decide(mockExistingState, mockDeleteApplicationLocationCommand);
      expect(events[0]).toBeInstanceOf(ApplicationLocationDeletedEvent);
      expect(events[0].data).toEqual({ location_id: 'mockId', application_id: 'mockId' });
    });
  });

  describe('evolve function', () => {
    it('evolves state for ApplicationLocationCreatedEvent correctly', () => {
      const mockEvent = new ApplicationLocationCreatedEvent(
        { location_id: 'mockId', application_id: 'mockId', rank: 5 },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'application-location',
          data: expect.objectContaining({
            location_id: 'mockId',
            application_id: 'mockId',
            rank: 5,
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for ApplicationLocationUpdatedEvent correctly', () => {
      // Mock an initial state that has an existing application-location
      const mockExistingState: ApplicationLocationState = {
        exists: true,
        type: 'application-location',
        data: {
          location_id: 'mockId',
          application_id: 'mockId',
          rank: 5,
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new ApplicationLocationUpdatedEvent(
        { location_id: 'mockId', application_id: 'mockId', rank: 6 },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'application-location',
          data: expect.objectContaining({
            location_id: 'mockId',
            application_id: 'mockId',
            rank: 6,
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for ApplicationLocationDeletedEvent correctly', () => {
      // Mock an initial state that has an existing application-location
      const mockExistingState: ApplicationLocationState = {
        exists: true,
        type: 'application-location',
        data: {
          location_id: 'mockId',
          application_id: 'mockId',
          rank: 5,
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new ApplicationLocationDeletedEvent(
        { location_id: 'mockId', application_id: 'mockId' },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'application-location',
          data: expect.objectContaining({
            location_id: 'mockId',
            application_id: 'mockId',
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
