import { SkillCreatedEvent } from './skill-created.event';
import { SkillCreatedHandler } from './skill-created.handler';
import { CreateSkillInput } from '../../inputs/create-skill.input';
import { Metadata } from '../../../event-store/types/metadata.type';

describe('SkillCreatedHandler', () => {
  let handler: SkillCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { skill: { create: jest.fn() } };
    handler = new SkillCreatedHandler(mockPrismaService);
  });

  it('should handle SkillCreatedEvent correctly', async () => {
    // Mock the data for CreateSkillInput and Metadata
    const mockCreateSkillInput: CreateSkillInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      category: 'CLOUD_PLATFORMS',
      name: 'test_name',
      description: 'test_description',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new SkillCreatedEvent(mockCreateSkillInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.skill.create was called correctly
    const expectedCreateObj = {
      data: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        category: 'CLOUD_PLATFORMS',
        name: 'test_name',
        description: 'test_description',
        created_at: mockMetadata.created_at,
      },
    };

    expect(mockPrismaService.skill.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
