import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateOpportunitySkillInput } from '../../inputs/create-opportunity-skill.input';
import { OpportunitySkillCreatedEvent } from './opportunity-skill-created.event';
import { OpportunitySkillCreatedHandler } from './opportunity-skill-created.handler';

describe('OpportunitySkillCreatedHandler', () => {
  let handler: OpportunitySkillCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { 'opportunity-skill': { create: jest.fn() } };
    handler = new OpportunitySkillCreatedHandler(mockPrismaService);
  });

  it('should handle OpportunitySkillCreatedEvent correctly', async () => {
    // Mock the data for CreateOpportunitySkillInput and Metadata
    const mockCreateOpportunitySkillInput: CreateOpportunitySkillInput = {
      opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new OpportunitySkillCreatedEvent(mockCreateOpportunitySkillInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.opportunity-skill.create was called correctly
    const expectedCreateObj = {
      data: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        record_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        record_type: 'record_type',
        user: {
          connect: {
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          },
        },
        text: 'text',
        created_at: mockMetadata.created_at,
      },
    };

    expect(mockPrismaService.opportunitySkill.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
