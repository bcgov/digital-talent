import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateCommentInput } from '../../inputs/update-comment.input';
import { UpdateCommentCommand } from './update-comment.command';

describe('UpdateCommentCommand', () => {
  const mockData: UpdateCommentInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    text: 'text',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new UpdateCommentCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "UpdateCommentCommand"', () => {
    const command = new UpdateCommentCommand(mockData, mockMetadata);

    expect(command.type).toBe('UpdateCommentCommand');
  });
});
