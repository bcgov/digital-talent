import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateCommentInput } from '../../inputs/create-comment.input';
import { CreateCommentCommand } from './create-comment.command';

describe('CreateCommentCommand', () => {
  const mockData: CreateCommentInput = {
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

  it('should correctly set data and metadata using constructor', () => {
    const command = new CreateCommentCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "CreateCommentCommand"', () => {
    const command = new CreateCommentCommand(mockData, mockMetadata);

    expect(command.type).toBe('CreateCommentCommand');
  });
});
