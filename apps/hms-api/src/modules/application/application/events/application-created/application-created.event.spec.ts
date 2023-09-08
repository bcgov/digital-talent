import { CreateApplicationInput } from '../../inputs/create-application.input';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { ApplicationCreatedEvent } from './application-created.event';

describe('ApplicationCreatedEvent', () => {
  const mockData: CreateApplicationInput = {
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
    const event = new ApplicationCreatedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "ApplicationCreatedEvent"', () => {
    const event = new ApplicationCreatedEvent(mockData, mockMetadata);

    expect(event.type).toBe('ApplicationCreatedEvent');
  });
});
