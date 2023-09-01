import { ApplicationSkillDeletedEvent } from './application-skill-deleted.event';
import { ApplicationSkillDeletedHandler } from './application-skill-deleted.handler';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteApplicationSkillInput } from '../../inputs/delete-application-skill.input';

describe('ApplicationSkillDeletedHandler', () => {
  let handler: ApplicationSkillDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { applicationSkill: { update: jest.fn() } };
    handler = new ApplicationSkillDeletedHandler(mockPrismaService);
  });

  it('should handle ApplicationSkillDeletedEvent correctly', async () => {
    // Mock the data for DeleteApplicationSkillInput and Metadata
    const mockDeleteApplicationSkillInput: DeleteApplicationSkillInput = {
      application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
      skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new ApplicationSkillDeletedEvent(mockDeleteApplicationSkillInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.applicationSkill.update was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: {
        application_id_skill_id: {
          application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
          skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
        },
      },
    };

    expect(mockPrismaService.applicationSkill.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
