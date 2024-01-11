import { UpdateMinistryInput } from '../../inputs/update-ministry.input';
import { Metadata } from '../../../event-store/types/metadata.type';
import { MinistryUpdatedEvent } from './ministry-updated.event';

describe('MinistryUpdatedEvent', () => {
  const mockData: UpdateMinistryInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    deltek_id: 'test_deltek_id',
    name: 'test_name',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new MinistryUpdatedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "MinistryUpdatedEvent"', () => {
    const event = new MinistryUpdatedEvent(mockData, mockMetadata);

    expect(event.type).toBe('MinistryUpdatedEvent');
  });
});
