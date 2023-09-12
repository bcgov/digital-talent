import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateOpportunityInput } from '../../inputs/create-opportunity.input';
import { OpportunityCreatedEvent } from './opportunity-created.event';
import { OpportunityCreatedHandler } from './opportunity-created.handler';

describe('OpportunityCreatedHandler', () => {
  let handler: OpportunityCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { opportunity: { create: jest.fn() } };
    handler = new OpportunityCreatedHandler(mockPrismaService);
  });

  it('should handle OpportunityCreatedEvent correctly', async () => {
    // Mock the data for CreateOpportunityInput and Metadata
    const mockCreateOpportunityInput: CreateOpportunityInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
      hiring_manager_id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
      ministry_id: 'd290f1ee-6c54-4b01-90e6-d701748f0855',
      involvement: 'FULL',
      work_option: 'HYBRID',
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

    const event = new OpportunityCreatedEvent(mockCreateOpportunityInput, mockMetadata);

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
        state: 'SUBMITTED',
        involvement: 'FULL',
        work_option: 'HYBRID',
        description: 'description',
        candidate_description: 'candidate description',
        team_name: 'team',
        team_description: 'team description',
        work_examples: 'work examples',
        created_at: mockMetadata.created_at,
        // metadata: {}, // todo: why is this here?
      },
    };

    expect(mockPrismaService.opportunity.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
