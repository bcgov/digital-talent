import { ApplicationSkillUpdatedEvent } from './application-skill-updated.event';
import { ApplicationSkillUpdatedHandler } from './application-skill-updated.handler';
import { UpdateApplicationSkillInput } from '../../inputs/update-application-skill.input';
import { Metadata } from '../../../../event-store/types/metadata.type';

describe('ApplicationSkillUpdatedHandler', () => {
  let handler: ApplicationSkillUpdatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { applicationSkill: { update: jest.fn() } };
    handler = new ApplicationSkillUpdatedHandler(mockPrismaService);
  });

  it('should handle ApplicationSkillUpdatedEvent correctly', async () => {
    // Mock the data for UpdateApplicationSkillInput and Metadata
    const mockUpdateApplicationSkillInput: UpdateApplicationSkillInput = {
      application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
      skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
      years_experience: 5,
      description: 'mock description',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new ApplicationSkillUpdatedEvent(mockUpdateApplicationSkillInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.applicationSkill.create was called correctly
    const expectedCreateObj = {
      data: {
        years_experience: 5,
        description: 'mock description',
        updated_at: mockMetadata.created_at,
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
