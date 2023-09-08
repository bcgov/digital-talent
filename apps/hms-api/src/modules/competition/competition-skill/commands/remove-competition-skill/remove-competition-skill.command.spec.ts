import { Metadata } from '../../../../event-store/types/metadata.type';
import { RemoveCompetitionSkillInput } from '../../inputs/remove-competition-skill.input';
import { RemoveCompetitionSkillCommand } from './remove-competition-skill.command';

describe('RemoveCompetitionSkillCommand', () => {
  const mockData: RemoveCompetitionSkillInput = {
    competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new RemoveCompetitionSkillCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "RemoveCompetitionSkillCommand"', () => {
    const command = new RemoveCompetitionSkillCommand(mockData, mockMetadata);

    expect(command.type).toBe('RemoveCompetitionSkillCommand');
  });
});
