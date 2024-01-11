import { UpdateApplicationInput } from '../../inputs/update-application.input';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { ApplicationUpdatedEvent } from './application-updated.event';

describe('ApplicationUpdatedEvent', () => {
  const mockData: UpdateApplicationInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    json: {
      exampleKey: 'exampleValue',
      anotherKey: 1234,
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new ApplicationUpdatedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "ApplicationUpdatedEvent"', () => {
    const event = new ApplicationUpdatedEvent(mockData, mockMetadata);

    expect(event.type).toBe('ApplicationUpdatedEvent');
  });
});
