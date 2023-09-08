import { UpdateApplicationSkillInput } from '../../inputs/update-application-skill.input';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { ApplicationSkillUpdatedEvent } from './application-skill-updated.event';

describe('ApplicationSkillUpdatedEvent', () => {
  const mockData: UpdateApplicationSkillInput = {
    application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    years_experience: 5,
    description: 'mock description',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new ApplicationSkillUpdatedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "ApplicationSkillUpdatedEvent"', () => {
    const event = new ApplicationSkillUpdatedEvent(mockData, mockMetadata);

    expect(event.type).toBe('ApplicationSkillUpdatedEvent');
  });
});
