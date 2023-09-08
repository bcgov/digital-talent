import { ClassificationCreatedEvent } from './classification-created.event';
import { ClassificationCreatedHandler } from './classification-created.handler';
import { CreateClassificationInput } from '../../inputs/create-classification.input';
import { Metadata } from '../../../event-store/types/metadata.type';

describe('ClassificationCreatedHandler', () => {
  let handler: ClassificationCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { classification: { create: jest.fn() } };
    handler = new ClassificationCreatedHandler(mockPrismaService);
  });

  it('should handle ClassificationCreatedEvent correctly', async () => {
    // Mock the data for CreateClassificationInput and Metadata
    const mockCreateClassificationInput: CreateClassificationInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      grid_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
      occupation_group_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
      rate_adjustment: 0.124,
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new ClassificationCreatedEvent(mockCreateClassificationInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.classification.create was called correctly
    const expectedCreateObj = {
      data: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        grid_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
        occupation_group_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
        rate_adjustment: 0.124,
        created_at: mockMetadata.created_at,
      },
    };

    expect(mockPrismaService.classification.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
