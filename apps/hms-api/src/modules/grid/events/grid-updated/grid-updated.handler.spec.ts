import { GridUpdatedEvent } from './grid-updated.event';
import { GridUpdatedHandler } from './grid-updated.handler';
import { UpdateGridInput } from '../../inputs/update-grid.input';
import { Metadata } from '../../../event-store/types/metadata.type';

describe('GridUpdatedHandler', () => {
  let handler: GridUpdatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { grid: { update: jest.fn() } };
    handler = new GridUpdatedHandler(mockPrismaService);
  });

  it('should handle GridUpdatedEvent correctly', async () => {
    // Mock the data for UpdateGridInput and Metadata
    const mockUpdateGridInput: UpdateGridInput = {
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
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new GridUpdatedEvent(mockUpdateGridInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.grid.create was called correctly
    const expectedCreateObj = {
      data: {
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
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: mockUpdateGridInput.id,
      },
    };

    expect(mockPrismaService.grid.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
