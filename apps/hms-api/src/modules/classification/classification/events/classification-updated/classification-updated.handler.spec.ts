import { ClassificationUpdatedEvent } from './classification-updated.event';
import { ClassificationUpdatedHandler } from './classification-updated.handler';
import { UpdateClassificationInput } from '../../inputs/update-classification.input';
import { Metadata } from '../../../../event-store/types/metadata.type';

describe('ClassificationUpdatedHandler', () => {
  let handler: ClassificationUpdatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { classification: { update: jest.fn() } };
    handler = new ClassificationUpdatedHandler(mockPrismaService);
  });

  it('should handle ClassificationUpdatedEvent correctly', async () => {
    // Mock the data for UpdateClassificationInput and Metadata
    const mockUpdateClassificationInput: UpdateClassificationInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      grid_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
      position_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
      rate_adjustment: 0.124,
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new ClassificationUpdatedEvent(mockUpdateClassificationInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.classification.create was called correctly
    const expectedCreateObj = {
      data: {
        grid_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
        position_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
        rate_adjustment: 0.124,
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: mockUpdateClassificationInput.id,
      },
    };

    expect(mockPrismaService.classification.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
