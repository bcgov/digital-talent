import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteGridInput } from '../../inputs/delete-grid.input';
import { DeleteGridCommand } from './delete-grid.command';

describe('DeleteGridCommand', () => {
  const mockData: DeleteGridInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new DeleteGridCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "DeleteGridCommand"', () => {
    const command = new DeleteGridCommand(mockData, mockMetadata);

    expect(command.type).toBe('DeleteGridCommand');
  });
});
