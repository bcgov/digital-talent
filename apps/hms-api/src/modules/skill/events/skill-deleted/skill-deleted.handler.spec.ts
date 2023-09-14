import { SkillDeletedEvent } from './skill-deleted.event';
import { SkillDeletedHandler } from './skill-deleted.handler';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteSkillInput } from '../../inputs';

describe('SkillDeletedHandler', () => {
  let handler: SkillDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { skill: { update: jest.fn() } };
    handler = new SkillDeletedHandler(mockPrismaService);
  });

  it('should handle SkillDeletedEvent correctly', async () => {
    // Mock the data for DeleteSkillInput and Metadata
    const mockDeleteSkillInput: DeleteSkillInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new SkillDeletedEvent(mockDeleteSkillInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.skill.create was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: {
        id: mockDeleteSkillInput.id,
      },
    };

    expect(mockPrismaService.skill.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
