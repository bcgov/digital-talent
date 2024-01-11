import { CreateApplicationLocationInput } from '../../inputs/create-application-location.input';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { ApplicationLocationCreatedEvent } from './application-location-created.event';

describe('ApplicationLocationCreatedEvent', () => {
  const mockData: CreateApplicationLocationInput = {
    application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    rank: 3,
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new ApplicationLocationCreatedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "ApplicationLocationCreatedEvent"', () => {
    const event = new ApplicationLocationCreatedEvent(mockData, mockMetadata);

    expect(event.type).toBe('ApplicationLocationCreatedEvent');
  });
});
