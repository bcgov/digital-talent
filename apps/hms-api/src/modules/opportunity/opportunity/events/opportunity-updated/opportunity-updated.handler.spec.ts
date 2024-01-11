import { OpportunityInvolvement, WorkOption } from '../../../../../@generated/prisma-nestjs-graphql';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateOpportunityInput } from '../../inputs/update-opportunity.input';
import { OpportunityUpdatedEvent } from './opportunity-updated.event';
import { OpportunityUpdatedHandler } from './opportunity-updated.handler';

describe('OpportunityUpdatedHandler', () => {
  let handler: OpportunityUpdatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { opportunity: { update: jest.fn() } };
    handler = new OpportunityUpdatedHandler(mockPrismaService);
  });

  it('should handle OpportunityUpdatedEvent correctly', async () => {
    // Mock the data for UpdateOpportunityInput and Metadata
    const mockUpdateOpportunityInput: UpdateOpportunityInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
      hiring_manager_id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
      ministry_id: 'd290f1ee-6c54-4b01-90e6-d701748f0855',
      involvement: OpportunityInvolvement.FULL,
      work_option: WorkOption.HYBRID,
      description: 'description',
      candidate_description: 'candidate description',
      team_name: 'team',
      team_description: 'team description',
      work_examples: 'work examples',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new OpportunityUpdatedEvent(mockUpdateOpportunityInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.opportunity.create was called correctly
    const expectedCreateObj = {
      data: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        competition: {
          connect: {
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          },
        },
        deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
        hiring_manager: {
          connect: {
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
          },
        },
        ministry: {
          connect: {
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0855',
          },
        },
        involvement: OpportunityInvolvement.FULL,
        work_option: WorkOption.HYBRID,
        description: 'description',
        candidate_description: 'candidate description',
        team_name: 'team',
        team_description: 'team description',
        work_examples: 'work examples',
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: mockUpdateOpportunityInput.id,
      },
    };

    expect(mockPrismaService.opportunity.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
