import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteSkillInput } from '../../inputs';
import { SkillDeletedEvent } from './skill-deleted.event';

describe('SkillDeletedEvent', () => {
  const mockData: DeleteSkillInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new SkillDeletedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "SkillDeletedEvent"', () => {
    const event = new SkillDeletedEvent(mockData, mockMetadata);

    expect(event.type).toBe('SkillDeletedEvent');
  });
});
