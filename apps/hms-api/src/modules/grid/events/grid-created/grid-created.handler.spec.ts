import { GridCreatedEvent } from './grid-created.event';
import { GridCreatedHandler } from './grid-created.handler';
import { CreateGridInput } from '../../inputs/create-grid.input';
import { Metadata } from '../../../event-store/types/metadata.type';

describe('GridCreatedHandler', () => {
  let handler: GridCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { grid: { create: jest.fn() } };
    handler = new GridCreatedHandler(mockPrismaService);
  });

  it('should handle GridCreatedEvent correctly', async () => {
    // Mock the data for CreateGridInput and Metadata
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
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new GridCreatedEvent(mockCreateGridInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.grid.create was called correctly
    const expectedCreateObj = {
      data: {
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
        created_at: mockMetadata.created_at,
      },
    };

    expect(mockPrismaService.grid.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
