import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteCommentInput } from '../../inputs/delete-comment.input';
import { DeleteCommentCommand } from './delete-comment.command';

describe('DeleteCommentCommand', () => {
  const mockData: DeleteCommentInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new DeleteCommentCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "DeleteCommentCommand"', () => {
    const command = new DeleteCommentCommand(mockData, mockMetadata);

    expect(command.type).toBe('DeleteCommentCommand');
  });
});
