import { ClassificationDeletedEvent } from './classification-deleted.event';
import { ClassificationDeletedHandler } from './classification-deleted.handler';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteClassificationInput } from '../../inputs/delete-classification.input';

describe('ClassificationDeletedHandler', () => {
  let handler: ClassificationDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { classification: { update: jest.fn() } };
    handler = new ClassificationDeletedHandler(mockPrismaService);
  });

  it('should handle ClassificationDeletedEvent correctly', async () => {
    // Mock the data for DeleteClassificationInput and Metadata
    const mockDeleteClassificationInput: DeleteClassificationInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new ClassificationDeletedEvent(mockDeleteClassificationInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.classification.create was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: {
        id: mockDeleteClassificationInput.id,
      },
    };

    expect(mockPrismaService.classification.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
