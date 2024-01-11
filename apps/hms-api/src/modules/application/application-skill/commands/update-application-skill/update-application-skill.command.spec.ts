import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateApplicationSkillInput } from '../../inputs/update-application-skill.input';
import { UpdateApplicationSkillCommand } from './update-application-skill.command';

describe('UpdateApplicationSkillCommand', () => {
  const mockData: UpdateApplicationSkillInput = {
    application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
    skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
    years_experience: 1,
    description: 'description',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new UpdateApplicationSkillCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "UpdateApplicationSkillCommand"', () => {
    const command = new UpdateApplicationSkillCommand(mockData, mockMetadata);

    expect(command.type).toBe('UpdateApplicationSkillCommand');
  });
});
