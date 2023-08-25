import { CommentUpdatedEvent } from './comment-updated.event';
import { CommentUpdatedHandler } from './comment-updated.handler';
import { UpdateCommentInput } from '../../inputs/update-comment.input';
import { Metadata } from '../../../event-store/types/metadata.type';

describe('CommentUpdatedHandler', () => {
  let handler: CommentUpdatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { comment: { update: jest.fn() } };
    handler = new CommentUpdatedHandler(mockPrismaService);
  });

  it('should handle CommentUpdatedEvent correctly', async () => {
    // Mock the data for UpdateCommentInput and Metadata
    const mockUpdateCommentInput: UpdateCommentInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      text: 'text',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new CommentUpdatedEvent(mockUpdateCommentInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.comment.create was called correctly
    const expectedCreateObj = {
      data: {
        user: {
          connect: {
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          },
        },
        text: 'text',
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: mockUpdateCommentInput.id,
      },
    };

    expect(mockPrismaService.comment.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
