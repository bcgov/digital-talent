import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteOpportunitySkillInput } from '../../inputs/delete-opportunity-skill.input';
import { OpportunitySkillDeletedEvent } from './opportunity-skill-deleted.event';
import { OpportunitySkillDeletedHandler } from './opportunity-skill-deleted.handler';

describe('OpportunitySkillDeletedHandler', () => {
  let handler: OpportunitySkillDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { opportunitySkill: { update: jest.fn() } };
    handler = new OpportunitySkillDeletedHandler(mockPrismaService);
  });

  it('should handle OpportunitySkillDeletedEvent correctly', async () => {
    // Mock the data for DeleteOpportunitySkillInput and Metadata
    const mockDeleteOpportunitySkillInput: DeleteOpportunitySkillInput = {
      opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new OpportunitySkillDeletedEvent(mockDeleteOpportunitySkillInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.opportunity-skill.create was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: {
        opportunity_id_skill_id: {
          opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        },
      },
    };

    expect(mockPrismaService.opportunitySkill.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
