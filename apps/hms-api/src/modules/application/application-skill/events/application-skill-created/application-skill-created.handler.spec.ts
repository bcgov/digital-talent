import { ApplicationSkillCreatedEvent } from './application-skill-created.event';
import { ApplicationSkillCreatedHandler } from './application-skill-created.handler';
import { CreateApplicationSkillInput } from '../../inputs/create-application-skill.input';
import { Metadata } from '../../../../event-store/types/metadata.type';

describe('ApplicationSkillCreatedHandler', () => {
  let handler: ApplicationSkillCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { applicationSkill: { create: jest.fn() } };
    handler = new ApplicationSkillCreatedHandler(mockPrismaService);
  });

  it('should handle ApplicationSkillCreatedEvent correctly', async () => {
    // Mock the data for CreateApplicationSkillInput and Metadata
    const mockCreateApplicationSkillInput: CreateApplicationSkillInput = {
      application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
      skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
      years_experience: 1,
      description: 'description',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new ApplicationSkillCreatedEvent(mockCreateApplicationSkillInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.application-skill.create was called correctly
    const expectedCreateObj = {
      data: {
        application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
        skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // example UUID
        years_experience: 1,
        description: 'description',
        created_at: mockMetadata.created_at,
      },
    };

    expect(mockPrismaService.applicationSkill.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
