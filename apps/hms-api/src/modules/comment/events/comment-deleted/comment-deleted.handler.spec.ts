import { CommentDeletedEvent } from './comment-deleted.event';
import { CommentDeletedHandler } from './comment-deleted.handler';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteCommentInput } from '../../inputs/delete-comment.input';

describe('CommentDeletedHandler', () => {
  let handler: CommentDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { comment: { update: jest.fn() } };
    handler = new CommentDeletedHandler(mockPrismaService);
  });

  it('should handle CommentDeletedEvent correctly', async () => {
    // Mock the data for DeleteCommentInput and Metadata
    const mockDeleteCommentInput: DeleteCommentInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new CommentDeletedEvent(mockDeleteCommentInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.comment.create was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: {
        id: mockDeleteCommentInput.id,
      },
    };

    expect(mockPrismaService.comment.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
