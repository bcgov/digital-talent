import { SkillCategory } from '../../../../@generated/prisma-nestjs-graphql';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateSkillInput } from '../../inputs/update-skill.input';
import { SkillUpdatedEvent } from './skill-updated.event';
import { SkillUpdatedHandler } from './skill-updated.handler';

describe('SkillUpdatedHandler', () => {
  let handler: SkillUpdatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { skill: { update: jest.fn() } };
    handler = new SkillUpdatedHandler(mockPrismaService);
  });

  it('should handle SkillUpdatedEvent correctly', async () => {
    // Mock the data for UpdateSkillInput and Metadata
    const mockUpdateSkillInput: UpdateSkillInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      category: SkillCategory.CLOUD_PLATFORMS,
      name: 'test_name',
      description: 'test_description',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new SkillUpdatedEvent(mockUpdateSkillInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.skill.create was called correctly
    const expectedCreateObj = {
      data: {
        category: SkillCategory.CLOUD_PLATFORMS,
        name: 'test_name',
        description: 'test_description',
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: mockUpdateSkillInput.id,
      },
    };

    expect(mockPrismaService.skill.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
