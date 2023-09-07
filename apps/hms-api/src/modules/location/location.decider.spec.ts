import { BadRequestException } from '@nestjs/common';
import { Metadata } from '../event-store/types/metadata.type';
import { LocationState, decide, evolve } from './location.decider';
import { CreateLocationCommand } from './commands/create-location/create-location.command';
import { UpdateLocationCommand } from './commands/update-location/update-location.command';
import { DeleteLocationCommand } from './commands/delete-location/delete-location.command';
import { LocationCreatedEvent } from './events/location-created/location-created.event';
import { LocationUpdatedEvent } from './events/location-updated/location-updated.event';
import { LocationDeletedEvent } from './events/location-deleted/location-deleted.event';
import { CreateLocationInput } from './inputs/create-location.input';
import { DeleteLocationInput } from './inputs/delete-location.input';
import { UpdateLocationInput } from './inputs/update-location.input';

describe('location.decider', () => {
  const mockInitialState: LocationState = { exists: false };
  const mockExistingState: LocationState = {
    exists: true,
    type: 'location',
    data: {
      created_at: new Date('2023-08-21T12:00:00Z'),
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      deltek_id: 'test_deltek_id',
      name: 'test_name',
      postal_code: 'V9M 3K2',
      lat: 0.23,
      lon: 0.25,
      region: 'CARIBOO',
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockCreateLocationInput: CreateLocationInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    deltek_id: 'test_deltek_id',
    name: 'test_name',
    postal_code: 'V9M 3K2',
    lat: 0.23,
    lon: 0.25,
    region: 'CARIBOO',
  };

  const mockCreateLocationCommand = new CreateLocationCommand(mockCreateLocationInput, mockMetadata);

  const mockUpdateLocationInput: UpdateLocationInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    deltek_id: 'test_deltek_id2',
    name: 'test_name2',
    postal_code: 'V9M 3K3',
    lat: 0.24,
    lon: 0.24,
    region: 'KOOTENAY',
  };

  const mockUpdateLocationCommand = new UpdateLocationCommand(mockUpdateLocationInput, mockMetadata);

  const mockDeleteLocationInput: DeleteLocationInput = { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' };

  const mockDeleteLocationCommand = new DeleteLocationCommand(mockDeleteLocationInput, mockMetadata);

  describe('decide function', () => {
    it('throws error if trying to create an existing location', () => {
      expect(() => {
        decide(mockExistingState, mockCreateLocationCommand);
      }).toThrow(BadRequestException);
    });

    it('creates an LocationCreatedEvent correctly', () => {
      const events = decide(mockInitialState, mockCreateLocationCommand);
      expect(events[0]).toBeInstanceOf(LocationCreatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        deltek_id: 'test_deltek_id',
        name: 'test_name',
        postal_code: 'V9M 3K2',
        lat: 0.23,
        lon: 0.25,
        region: 'CARIBOO',
      });
    });

    it('throws error if trying to update a non-existing location', () => {
      expect(() => {
        decide(mockInitialState, mockUpdateLocationCommand);
      }).toThrow(BadRequestException);
    });

    it('updates an existing Location correctly', () => {
      const events = decide(mockExistingState, mockUpdateLocationCommand);
      expect(events[0]).toBeInstanceOf(LocationUpdatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        deltek_id: 'test_deltek_id2',
        name: 'test_name2',
        postal_code: 'V9M 3K3',
        lat: 0.24,
        lon: 0.24,
        region: 'KOOTENAY',
      });
    });

    it('throws error if trying to delete a non-existing location', () => {
      expect(() => {
        decide(mockInitialState, mockDeleteLocationCommand);
      }).toThrow(BadRequestException);
    });

    it('deletes an existing Location correctly', () => {
      const events = decide(mockExistingState, mockDeleteLocationCommand);
      expect(events[0]).toBeInstanceOf(LocationDeletedEvent);
      expect(events[0].data).toEqual({ id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' });
    });
  });

  describe('evolve function', () => {
    it('evolves state for LocationCreatedEvent correctly', () => {
      const mockEvent = new LocationCreatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          deltek_id: 'test_deltek_id2',
          name: 'test_name2',
          postal_code: 'V9M 3K3',
          lat: 0.24,
          lon: 0.24,
          region: 'CARIBOO',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'location',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            deltek_id: 'test_deltek_id2',
            name: 'test_name2',
            postal_code: 'V9M 3K3',
            lat: 0.24,
            lon: 0.24,
            region: 'CARIBOO',
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for LocationUpdatedEvent correctly', () => {
      // Mock an initial state that has an existing location
      const mockExistingState: LocationState = {
        exists: true,
        type: 'location',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          deltek_id: 'test_deltek_id2',
          name: 'test_name2',
          postal_code: 'V9M 3K3',
          lat: 0.24,
          lon: 0.24,
          region: 'CARIBOO',
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new LocationUpdatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          deltek_id: 'test_deltek_id3',
          name: 'test_name3',
          postal_code: 'V9M 3K4',
          lat: 0.25,
          lon: 0.25,
          region: 'KOOTENAY',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'location',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            deltek_id: 'test_deltek_id3',
            name: 'test_name3',
            postal_code: 'V9M 3K4',
            lat: 0.25,
            lon: 0.25,
            region: 'KOOTENAY',
            updated_at: expect.any(Date), // Ensure updated_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for LocationDeletedEvent correctly', () => {
      // Mock an initial state that has an existing location
      const mockExistingState: LocationState = {
        exists: true,
        type: 'location',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          deltek_id: 'test_deltek_id3',
          name: 'test_name3',
          postal_code: 'V9M 3K4',
          lat: 0.25,
          lon: 0.25,
          region: 'CARIBOO',
          created_at: new Date('2023-08-21T10:00:00Z'),
        },
      };

      const mockEvent = new LocationDeletedEvent(
        { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'location',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
