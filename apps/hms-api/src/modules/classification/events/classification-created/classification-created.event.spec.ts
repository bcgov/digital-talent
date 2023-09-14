import { CreateClassificationInput } from '../../inputs/create-classification.input';
import { Metadata } from '../../../event-store/types/metadata.type';
import { ClassificationCreatedEvent } from './classification-created.event';

describe('ClassificationCreatedEvent', () => {
  const mockData: CreateClassificationInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    grid_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
    occupation_group_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
    rate_adjustment: 0.124,
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new ClassificationCreatedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "ClassificationCreatedEvent"', () => {
    const event = new ClassificationCreatedEvent(mockData, mockMetadata);

    expect(event.type).toBe('ClassificationCreatedEvent');
  });
});
