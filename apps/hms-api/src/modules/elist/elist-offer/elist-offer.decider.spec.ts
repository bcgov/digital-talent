import { BadRequestException } from '@nestjs/common';
import { Metadata } from '../../event-store/types/metadata.type';
import { CreateElistOfferCommand } from './commands/create-elist-offer/create-elist-offer.command';
import { DeleteElistOfferCommand } from './commands/delete-elist-offer/delete-elist-offer.command';
import { UpdateElistOfferCommand } from './commands/update-elist-offer/update-elist-offer.command';
import { decide, ElistOfferState, evolve } from './elist-offer.decider';
import { ElistOfferCreatedEvent } from './events/elist-offer-created/elist-offer-created.event';
import { ElistOfferDeletedEvent } from './events/elist-offer-deleted/elist-offer-deleted.event';
import { ElistOfferUpdatedEvent } from './events/elist-offer-updated/elist-offer-updated.event';
import { CreateElistOfferInput } from './inputs/create-elist-offer.input';
import { DeleteElistOfferInput } from './inputs/delete-elist-offer.input';
import { UpdateElistOfferInput } from './inputs/update-elist-offer.input';

describe('elist-offer.decider', () => {
  const mockInitialState: ElistOfferState = { exists: false };
  const mockExistingState: ElistOfferState = {
    exists: true,
    type: 'elist-offer',
    data: {
      created_at: new Date('2023-08-21T12:00:00Z'),
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      elist_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      opportunity_id: 'e780cdda-37c9-4bbb-bf35-b2dd751d8ab9',
      is_accepted: true,
      updated_at: null,
      deleted_at: null,
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockCreateElistOfferInput: CreateElistOfferInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    elist_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    is_accepted: true,
  };

  const mockCreateElistOfferCommand = new CreateElistOfferCommand(mockCreateElistOfferInput, mockMetadata);

  const mockUpdateElistOfferInput: UpdateElistOfferInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    elist_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
    is_accepted: false,
  };

  const mockUpdateElistOfferCommand = new UpdateElistOfferCommand(mockUpdateElistOfferInput, mockMetadata);

  const mockDeleteElistOfferInput: DeleteElistOfferInput = { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' };

  const mockDeleteElistOfferCommand = new DeleteElistOfferCommand(mockDeleteElistOfferInput, mockMetadata);

  describe('decide function', () => {
    it('throws error if trying to create an existing elist-offer', () => {
      expect(() => {
        decide(mockExistingState, mockCreateElistOfferCommand);
      }).toThrow(BadRequestException);
    });

    it('creates an ElistOfferCreatedEvent correctly', () => {
      const events = decide(mockInitialState, mockCreateElistOfferCommand);
      expect(events[0]).toBeInstanceOf(ElistOfferCreatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        elist_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        is_accepted: true,
      });
    });

    it('throws error if trying to update a non-existing elist-offer', () => {
      expect(() => {
        decide(mockInitialState, mockUpdateElistOfferCommand);
      }).toThrow(BadRequestException);
    });

    it('updates an existing ElistOffer correctly', () => {
      const events = decide(mockExistingState, mockUpdateElistOfferCommand);
      expect(events[0]).toBeInstanceOf(ElistOfferUpdatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        elist_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
        is_accepted: false,
      });
    });

    it('throws error if trying to delete a non-existing elist-offer', () => {
      expect(() => {
        decide(mockInitialState, mockDeleteElistOfferCommand);
      }).toThrow(BadRequestException);
    });

    it('deletes an existing ElistOffer correctly', () => {
      const events = decide(mockExistingState, mockDeleteElistOfferCommand);
      expect(events[0]).toBeInstanceOf(ElistOfferDeletedEvent);
      expect(events[0].data).toEqual({ id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' });
    });
  });

  describe('evolve function', () => {
    it('evolves state for ElistOfferCreatedEvent correctly', () => {
      const mockEvent = new ElistOfferCreatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          elist_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          is_accepted: true,
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'elist-offer',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            elist_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            is_accepted: true,
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for ElistOfferUpdatedEvent correctly', () => {
      // Mock an initial state that has an existing elist-offer
      const mockExistingState: ElistOfferState = {
        exists: true,
        type: 'elist-offer',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          elist_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          opportunity_id: 'e780cdda-37c9-4bbb-bf35-b2dd751d8ab9',
          is_accepted: true,
          created_at: new Date('2023-08-21T10:00:00Z'),
          updated_at: null,
          deleted_at: null,
        },
      };

      const mockEvent = new ElistOfferUpdatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          elist_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
          is_accepted: false,
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'elist-offer',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            elist_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
            is_accepted: false,
            updated_at: expect.any(Date), // Ensure updated_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for ElistOfferDeletedEvent correctly', () => {
      // Mock an initial state that has an existing elist-offer
      const mockExistingState: ElistOfferState = {
        exists: true,
        type: 'elist-offer',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          elist_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          opportunity_id: 'e780cdda-37c9-4bbb-bf35-b2dd751d8ab9',
          is_accepted: true,
          created_at: new Date('2023-08-21T10:00:00Z'),
          updated_at: null,
          deleted_at: null,
        },
      };

      const mockEvent = new ElistOfferDeletedEvent(
        { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'elist-offer',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
