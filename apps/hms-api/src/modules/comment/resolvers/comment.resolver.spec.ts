import { CreateCommentCommand } from '../commands/create-comment/create-comment.command';
import { DeleteCommentCommand } from '../commands/delete-comment/delete-comment.command';
import { UpdateCommentCommand } from '../commands/update-comment/update-comment.command';
import { CreateCommentInput } from '../inputs/create-comment.input';
import { UpdateCommentInput } from '../inputs/update-comment.input';
import { CommentResolver } from './comment.resolver';

describe('CommentResolver', () => {
  let resolver: CommentResolver;
  let mockCommandBus: any;
  let mockPrismaService: any;

  beforeEach(() => {
    mockCommandBus = { execute: jest.fn() };
    mockPrismaService = {
      comment: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
      },
    };
    resolver = new CommentResolver(mockCommandBus, mockPrismaService);
  });

  it('should create an comment correctly', async () => {
    const input: CreateCommentInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      record_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      record_type: 'record_type',
      user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      text: 'text',
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.createComment({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new CreateCommentCommand({ ...input }, { created_by: userId }),
      }),
    );
  });

  it('should update an comment correctly', async () => {
    const input: UpdateCommentInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      text: 'text2',
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.updateComment({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new UpdateCommentCommand(input, { created_by: userId }),
      }),
    );
  });

  it('should delete an comment correctly', async () => {
    const id = 'mockAppId';
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.deleteComment({ id: userId } as any, id);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new DeleteCommentCommand({ id }, { created_by: userId }),
      }),
    );
  });

  it('should get all comments correctly', async () => {
    const mockComments = [{ id: '1' }, { id: '2' }];
    mockPrismaService.comment.findMany.mockResolvedValueOnce(mockComments);

    const result = await resolver.comments();

    expect(result).toEqual(mockComments);
    expect(mockPrismaService.comment.findMany).toHaveBeenCalled();
  });

  it('should get a specific comment by id correctly', async () => {
    const appId = 'mockAppId';
    const mockComment = { id: appId };
    mockPrismaService.comment.findUnique.mockResolvedValueOnce(mockComment);

    const result = await resolver.comment(appId);

    expect(result).toEqual(mockComment);
    expect(mockPrismaService.comment.findUnique).toHaveBeenCalledWith({ where: { id: appId } });
  });
});
