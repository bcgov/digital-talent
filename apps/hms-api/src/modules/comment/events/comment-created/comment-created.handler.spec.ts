import { CommentCreatedEvent } from './comment-created.event';
import { CommentCreatedHandler } from './comment-created.handler';
import { CreateCommentInput } from '../../inputs/create-comment.input';
import { Metadata } from '../../../event-store/types/metadata.type';

describe('CommentCreatedHandler', () => {
  let handler: CommentCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { comment: { create: jest.fn() } };
    handler = new CommentCreatedHandler(mockPrismaService);
  });

  it('should handle CommentCreatedEvent correctly', async () => {
    // Mock the data for CreateCommentInput and Metadata
    const mockCreateCommentInput: CreateCommentInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      record_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      record_type: 'record_type',
      user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      text: 'text',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new CommentCreatedEvent(mockCreateCommentInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.comment.create was called correctly
    const expectedCreateObj = {
      data: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        record_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        record_type: 'record_type',
        user: {
          connect: {
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          },
        },
        text: 'text',
        created_at: mockMetadata.created_at,
      },
    };

    expect(mockPrismaService.comment.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
