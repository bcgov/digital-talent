import { AddCompetitionSkillInput } from '../../inputs/add-competition-skill.input';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CompetitionSkillAddedEvent } from './competition-skill-added.event';

describe('CompetitionSkillAdddEvent', () => {
  const mockData: AddCompetitionSkillInput = {
    competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    min_years_experience: 2,
    is_required: true,
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const event = new CompetitionSkillAddedEvent(mockData, mockMetadata);

    expect(event.data).toEqual(mockData);
    expect(event.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "CompetitionSkillAdddEvent"', () => {
    const event = new CompetitionSkillAddedEvent(mockData, mockMetadata);

    expect(event.type).toBe('CompetitionSkillAdddEvent');
  });
});
