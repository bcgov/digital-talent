import { UpdateLocationInput } from '../../inputs/update-location.input';
import { Metadata } from '../../../event-store/types/metadata.type';
import { LocationUpdatedEvent } from './location-updated.event';

describe('LocationUpdatedEvent', () => {
  const mockData: UpdateLocationInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    deltek_id: 'test_deltek_id',
    name: 'test_name',
    postal_code: 'V9M 3K2',
    lat: 0.23,
    lon: 0.25,
    region: 'CARIBOO',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new LocationUpdatedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "LocationUpdatedEvent"', () => {
    const event = new LocationUpdatedEvent(mockData, mockMetadata);

    expect(event.type).toBe('LocationUpdatedEvent');
  });
});
