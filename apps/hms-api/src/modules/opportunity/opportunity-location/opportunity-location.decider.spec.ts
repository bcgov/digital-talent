import { BadRequestException } from '@nestjs/common';
import { Metadata } from '../../event-store/types/metadata.type';
import { CreateOpportunityLocationCommand } from './commands/create-opportunity-location/create-opportunity-location.command';
import { DeleteOpportunityLocationCommand } from './commands/delete-opportunity-location/delete-opportunity-location.command';
import { OpportunityLocationCreatedEvent } from './events/opportunity-location-created/opportunity-location-created.event';
import { OpportunityLocationDeletedEvent } from './events/opportunity-location-deleted/opportunity-location-deleted.event';
import { CreateOpportunityLocationInput } from './inputs/create-opportunity-location.input';
import { DeleteOpportunityLocationInput } from './inputs/delete-opportunity-location.input';
import { decide, evolve, OpportunityLocationState } from './opportunity-location.decider';

describe('opportunity-location.decider', () => {
  const mockInitialState: OpportunityLocationState = { exists: false };
  const mockExistingState: OpportunityLocationState = {
    exists: true,
    type: 'opportunity-location',
    data: {
      created_at: new Date('2023-08-21T12:00:00Z'),
      opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      deleted_at: null,
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockCreateOpportunityLocationInput: CreateOpportunityLocationInput = {
    opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
  };

  const mockCreateOpportunityLocationCommand = new CreateOpportunityLocationCommand(
    mockCreateOpportunityLocationInput,
    mockMetadata,
  );

  const mockDeleteOpportunityLocationInput: DeleteOpportunityLocationInput = {
    opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
  };

  const mockDeleteOpportunityLocationCommand = new DeleteOpportunityLocationCommand(
    mockDeleteOpportunityLocationInput,
    mockMetadata,
  );

  describe('decide function', () => {
    it('throws error if trying to create an existing opportunity-location', () => {
      expect(() => {
        decide(mockExistingState, mockCreateOpportunityLocationCommand);
      }).toThrow(BadRequestException);
    });

    it('creates an OpportunityLocationCreatedEvent correctly', () => {
      const events = decide(mockInitialState, mockCreateOpportunityLocationCommand);
      expect(events[0]).toBeInstanceOf(OpportunityLocationCreatedEvent);
      expect(events[0].data).toEqual({
        opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      });
    });

    it('throws error if trying to delete a non-existing opportunity-location', () => {
      expect(() => {
        decide(mockInitialState, mockDeleteOpportunityLocationCommand);
      }).toThrow(BadRequestException);
    });

    it('deletes an existing OpportunityLocation correctly', () => {
      const events = decide(mockExistingState, mockDeleteOpportunityLocationCommand);
      expect(events[0]).toBeInstanceOf(OpportunityLocationDeletedEvent);
      expect(events[0].data).toEqual({
        opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      });
    });
  });

  describe('evolve function', () => {
    it('evolves state for OpportunityLocationCreatedEvent correctly', () => {
      const mockEvent = new OpportunityLocationCreatedEvent(
        {
          opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'opportunity-location',
          data: expect.objectContaining({
            opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for OpportunityLocationDeletedEvent correctly', () => {
      // Mock an initial state that has an existing opportunity-location
      const mockExistingState: OpportunityLocationState = {
        exists: true,
        type: 'opportunity-location',
        data: {
          created_at: new Date('2023-08-21T12:00:00Z'),
          opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          deleted_at: null,
        },
      };

      const mockEvent = new OpportunityLocationDeletedEvent(
        { opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852' },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'opportunity-location',
          data: expect.objectContaining({
            created_at: new Date('2023-08-21T12:00:00Z'),
            opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
