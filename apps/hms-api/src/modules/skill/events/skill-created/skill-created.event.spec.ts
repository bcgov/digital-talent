import { CreateSkillInput } from '../../inputs/create-skill.input';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SkillCreatedEvent } from './skill-created.event';

describe('SkillCreatedEvent', () => {
  const mockData: CreateSkillInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    category: 'CLOUD_PLATFORMS',
    name: 'test_name',
    description: 'test_description',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new SkillCreatedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "SkillCreatedEvent"', () => {
    const event = new SkillCreatedEvent(mockData, mockMetadata);

    expect(event.type).toBe('SkillCreatedEvent');
  });
});
