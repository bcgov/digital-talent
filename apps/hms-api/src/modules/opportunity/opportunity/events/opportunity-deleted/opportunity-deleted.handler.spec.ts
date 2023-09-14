import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteOpportunityInput } from '../../inputs/delete-opportunity.input';
import { OpportunityDeletedEvent } from './opportunity-deleted.event';
import { OpportunityDeletedHandler } from './opportunity-deleted.handler';

describe('OpportunityDeletedHandler', () => {
  let handler: OpportunityDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { opportunity: { update: jest.fn() } };
    handler = new OpportunityDeletedHandler(mockPrismaService);
  });

  it('should handle OpportunityDeletedEvent correctly', async () => {
    // Mock the data for DeleteOpportunityInput and Metadata
    const mockDeleteOpportunityInput: DeleteOpportunityInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new OpportunityDeletedEvent(mockDeleteOpportunityInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.opportunity.create was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: {
        id: mockDeleteOpportunityInput.id,
      },
    };

    expect(mockPrismaService.opportunity.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
