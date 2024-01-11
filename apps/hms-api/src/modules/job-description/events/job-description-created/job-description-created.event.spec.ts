import { CreateJobDescriptionInput } from '../../inputs/create-job-description.input';
import { Metadata } from '../../../event-store/types/metadata.type';
import { JobDescriptionCreatedEvent } from './job-description-created.event';

describe('JobDescriptionCreatedEvent', () => {
  const mockData: CreateJobDescriptionInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    e_class_id: 'test_e_class_id',
    name: 'test_name',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new JobDescriptionCreatedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "JobDescriptionCreatedEvent"', () => {
    const event = new JobDescriptionCreatedEvent(mockData, mockMetadata);

    expect(event.type).toBe('JobDescriptionCreatedEvent');
  });
});
