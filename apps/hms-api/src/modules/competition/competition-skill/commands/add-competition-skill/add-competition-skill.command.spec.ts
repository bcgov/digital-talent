import { Metadata } from '../../../../event-store/types/metadata.type';
import { AddCompetitionSkillInput } from '../../inputs/add-competition-skill.input';
import { AddCompetitionSkillCommand } from './add-competition-skill.command';

describe('AddCompetitionSkillCommand', () => {
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
    const command = new AddCompetitionSkillCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "AddCompetitionSkillCommand"', () => {
    const command = new AddCompetitionSkillCommand(mockData, mockMetadata);

    expect(command.type).toBe('AddCompetitionSkillCommand');
  });
});
