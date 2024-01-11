import { CreateOccupationGroupInput } from '../../inputs/create-occupation-group.input';
import { Metadata } from '../../../event-store/types/metadata.type';
import { OccupationGroupCreatedEvent } from './occupation-group-created.event';

describe('OccupationGroupCreatedEvent', () => {
  const mockData: CreateOccupationGroupInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    code: 'test_code',
    name: 'test_name',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new OccupationGroupCreatedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "OccupationGroupCreatedEvent"', () => {
    const event = new OccupationGroupCreatedEvent(mockData, mockMetadata);

    expect(event.type).toBe('OccupationGroupCreatedEvent');
  });
});
