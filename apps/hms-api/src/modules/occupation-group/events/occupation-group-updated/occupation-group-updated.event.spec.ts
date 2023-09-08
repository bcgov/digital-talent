import { UpdateOccupationGroupInput } from '../../inputs/update-occupation-group.input';
import { Metadata } from '../../../event-store/types/metadata.type';
import { OccupationGroupUpdatedEvent } from './occupation-group-updated.event';

describe('OccupationGroupUpdatedEvent', () => {
  const mockData: UpdateOccupationGroupInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    code: 'test_code',
    name: 'test_name',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new OccupationGroupUpdatedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "OccupationGroupUpdatedEvent"', () => {
    const event = new OccupationGroupUpdatedEvent(mockData, mockMetadata);

    expect(event.type).toBe('OccupationGroupUpdatedEvent');
  });
});
