import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateApplicationSkillInput } from '../../inputs/create-application-skill.input';
import { CreateApplicationSkillCommand } from './create-application-skill.command';

describe('CreateApplicationSkillCommand', () => {
  const mockData: CreateApplicationSkillInput = {
    application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
    skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
    years_experience: 5,
    description: 'mock description',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new CreateApplicationSkillCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "CreateApplicationSkillCommand"', () => {
    const command = new CreateApplicationSkillCommand(mockData, mockMetadata);

    expect(command.type).toBe('CreateApplicationSkillCommand');
  });
});
