import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateSkillInput } from '../../inputs/update-skill.input';
import { UpdateSkillCommand } from './update-skill.command';

describe('UpdateSkillCommand', () => {
  const mockData: UpdateSkillInput = {
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
    const command = new UpdateSkillCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "UpdateSkillCommand"', () => {
    const command = new UpdateSkillCommand(mockData, mockMetadata);

    expect(command.type).toBe('UpdateSkillCommand');
  });
});
