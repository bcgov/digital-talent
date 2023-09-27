import { BadRequestException } from '@nestjs/common';
import { Metadata } from '../event-store/types/metadata.type';
import { CreateGridCommand } from './commands/create-grid/create-grid.command';
import { DeleteGridCommand } from './commands/delete-grid/delete-grid.command';
import { UpdateGridCommand } from './commands/update-grid/update-grid.command';
import { GridCreatedEvent } from './events/grid-created/grid-created.event';
import { GridDeletedEvent } from './events/grid-deleted/grid-deleted.event';
import { GridUpdatedEvent } from './events/grid-updated/grid-updated.event';
import { decide, evolve, State } from './grid.decider';
import { CreateGridInput } from './inputs/create-grid.input';
import { DeleteGridInput } from './inputs/delete-grid.input';
import { UpdateGridInput } from './inputs/update-grid.input';

describe('grid.decider', () => {
  const mockInitialState: State = { exists: false };
  const mockExistingState: State = {
    exists: true,
    type: 'grid',
    data: {
      created_at: new Date('2023-08-21T12:00:00Z'),
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      steps: [
        {
          name: 1,
          rate_per_hour: 44.1627,
          rate_per_year: 80652.2,
          rate_per_month: 6721.02,
          rate_per_fortnight: 3091.39,
        },
        {
          name: 2,
          rate_per_hour: 45.4873,
          rate_per_year: 83071.2,
          rate_per_month: 6922.6,
          rate_per_fortnight: 3184.11,
        },
      ],
      updated_at: null,
      deleted_at: null,
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockCreateGridInput: CreateGridInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    steps: [
      {
        name: 1,
        rate_per_hour: 44.1627,
        rate_per_year: 80652.2,
        rate_per_month: 6721.02,
        rate_per_fortnight: 3091.39,
      },
      {
        name: 2,
        rate_per_hour: 45.4873,
        rate_per_year: 83071.2,
        rate_per_month: 6922.6,
        rate_per_fortnight: 3184.11,
      },
    ],
  };

  const mockCreateGridCommand = new CreateGridCommand(mockCreateGridInput, mockMetadata);

  const mockUpdateGridInput: UpdateGridInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    name: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
    steps: [
      {
        name: 1,
        rate_per_hour: 44.1657,
        rate_per_year: 80652.2,
        rate_per_month: 6771.02,
        rate_per_fortnight: 3081.39,
      },
      {
        name: 2,
        rate_per_hour: 45.4893,
        rate_per_year: 80071.2,
        rate_per_month: 6922.6,
        rate_per_fortnight: 3384.11,
      },
    ],
  };

  const mockUpdateGridCommand = new UpdateGridCommand(mockUpdateGridInput, mockMetadata);

  const mockDeleteGridInput: DeleteGridInput = { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' };

  const mockDeleteGridCommand = new DeleteGridCommand(mockDeleteGridInput, mockMetadata);

  describe('decide function', () => {
    it('throws error if trying to create an existing grid', () => {
      expect(() => {
        decide(mockExistingState, mockCreateGridCommand);
      }).toThrow(BadRequestException);
    });

    it('creates an GridCreatedEvent correctly', () => {
      const events = decide(mockInitialState, mockCreateGridCommand);
      expect(events[0]).toBeInstanceOf(GridCreatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        steps: [
          {
            name: 1,
            rate_per_hour: 44.1627,
            rate_per_year: 80652.2,
            rate_per_month: 6721.02,
            rate_per_fortnight: 3091.39,
          },
          {
            name: 2,
            rate_per_hour: 45.4873,
            rate_per_year: 83071.2,
            rate_per_month: 6922.6,
            rate_per_fortnight: 3184.11,
          },
        ],
      });
    });

    it('throws error if trying to update a non-existing grid', () => {
      expect(() => {
        decide(mockInitialState, mockUpdateGridCommand);
      }).toThrow(BadRequestException);
    });

    it('updates an existing Grid correctly', () => {
      const events = decide(mockExistingState, mockUpdateGridCommand);
      expect(events[0]).toBeInstanceOf(GridUpdatedEvent);
      expect(events[0].data).toEqual({
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        name: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
        steps: [
          {
            name: 1,
            rate_per_hour: 44.1657,
            rate_per_year: 80652.2,
            rate_per_month: 6771.02,
            rate_per_fortnight: 3081.39,
          },
          {
            name: 2,
            rate_per_hour: 45.4893,
            rate_per_year: 80071.2,
            rate_per_month: 6922.6,
            rate_per_fortnight: 3384.11,
          },
        ],
      });
    });

    it('throws error if trying to delete a non-existing grid', () => {
      expect(() => {
        decide(mockInitialState, mockDeleteGridCommand);
      }).toThrow(BadRequestException);
    });

    it('deletes an existing Grid correctly', () => {
      const events = decide(mockExistingState, mockDeleteGridCommand);
      expect(events[0]).toBeInstanceOf(GridDeletedEvent);
      expect(events[0].data).toEqual({ id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' });
    });
  });

  describe('evolve function', () => {
    it('evolves state for GridCreatedEvent correctly', () => {
      const mockEvent = new GridCreatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          name: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
          steps: [
            {
              name: 1,
              rate_per_hour: 44.1657,
              rate_per_year: 80652.2,
              rate_per_month: 6771.02,
              rate_per_fortnight: 3081.39,
            },
            {
              name: 2,
              rate_per_hour: 45.4893,
              rate_per_year: 80071.2,
              rate_per_month: 6922.6,
              rate_per_fortnight: 3384.11,
            },
          ],
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'grid',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            name: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
            steps: [
              {
                name: 1,
                rate_per_hour: 44.1657,
                rate_per_year: 80652.2,
                rate_per_month: 6771.02,
                rate_per_fortnight: 3081.39,
              },
              {
                name: 2,
                rate_per_hour: 45.4893,
                rate_per_year: 80071.2,
                rate_per_month: 6922.6,
                rate_per_fortnight: 3384.11,
              },
            ],
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for GridUpdatedEvent correctly', () => {
      // Mock an initial state that has an existing grid
      const mockExistingState: State = {
        exists: true,
        type: 'grid',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          name: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
          steps: [
            {
              name: 1,
              rate_per_hour: 44.1657,
              rate_per_year: 80652.2,
              rate_per_month: 6771.02,
              rate_per_fortnight: 3081.39,
            },
            {
              name: 2,
              rate_per_hour: 45.4893,
              rate_per_year: 80071.2,
              rate_per_month: 6922.6,
              rate_per_fortnight: 3384.11,
            },
          ],
          created_at: new Date('2023-08-21T10:00:00Z'),
          updated_at: null,
          deleted_at: null,
        },
      };

      const mockEvent = new GridUpdatedEvent(
        {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          name: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
          steps: [
            {
              name: 1,
              rate_per_hour: 44.1757,
              rate_per_year: 80655.2,
              rate_per_month: 6781.02,
              rate_per_fortnight: 30981.39,
            },
            {
              name: 2,
              rate_per_hour: 45.4393,
              rate_per_year: 800471.2,
              rate_per_month: 6952.6,
              rate_per_fortnight: 3684.11,
            },
          ],
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'grid',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            name: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
            steps: [
              {
                name: 1,
                rate_per_hour: 44.1757,
                rate_per_year: 80655.2,
                rate_per_month: 6781.02,
                rate_per_fortnight: 30981.39,
              },
              {
                name: 2,
                rate_per_hour: 45.4393,
                rate_per_year: 800471.2,
                rate_per_month: 6952.6,
                rate_per_fortnight: 3684.11,
              },
            ],
          }),
        }),
      );
    });

    it('evolves state for GridDeletedEvent correctly', () => {
      // Mock an initial state that has an existing grid
      const mockExistingState: State = {
        exists: true,
        type: 'grid',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          name: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
          steps: [
            {
              name: 1,
              rate_per_hour: 44.1757,
              rate_per_year: 80655.2,
              rate_per_month: 6781.02,
              rate_per_fortnight: 30981.39,
            },
            {
              name: 2,
              rate_per_hour: 45.4393,
              rate_per_year: 800471.2,
              rate_per_month: 6952.6,
              rate_per_fortnight: 3684.11,
            },
          ],
          created_at: new Date('2023-08-21T10:00:00Z'),
          updated_at: null,
          deleted_at: null,
        },
      };

      const mockEvent = new GridDeletedEvent(
        { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'grid',
          data: expect.objectContaining({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
