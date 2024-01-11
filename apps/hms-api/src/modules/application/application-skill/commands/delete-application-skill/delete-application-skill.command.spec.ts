import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteApplicationSkillInput } from '../../inputs/delete-application-skill.input';
import { DeleteApplicationSkillCommand } from './delete-application-skill.command';

describe('DeleteApplicationSkillCommand', () => {
  const mockData: DeleteApplicationSkillInput = {
    application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new DeleteApplicationSkillCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "DeleteApplicationSkillCommand"', () => {
    const command = new DeleteApplicationSkillCommand(mockData, mockMetadata);

    expect(command.type).toBe('DeleteApplicationSkillCommand');
  });
});
