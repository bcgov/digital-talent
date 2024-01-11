import { DeleteGridInput } from '../../inputs/delete-grid.input';
import { Metadata } from '../../../event-store/types/metadata.type';
import { GridDeletedEvent } from './grid-deleted.event';

describe('GridDeletedEvent', () => {
  const mockData: DeleteGridInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new GridDeletedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "GridDeletedEvent"', () => {
    const event = new GridDeletedEvent(mockData, mockMetadata);

    expect(event.type).toBe('GridDeletedEvent');
  });
});
