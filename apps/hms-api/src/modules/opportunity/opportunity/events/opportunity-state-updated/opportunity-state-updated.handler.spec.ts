import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateOpportunityStateInput } from '../../inputs/update-opportunity-state.input';
import { OpportunityStateUpdatedEvent } from './opportunity-state-updated.event';
import { OpportunityStateUpdatedHandler } from './opportunity-state-updated.handler';

describe('OpportunityStateUpdatedHandler', () => {
  let handler: OpportunityStateUpdatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { opportunity: { update: jest.fn() } };
    handler = new OpportunityStateUpdatedHandler(mockPrismaService);
  });

  it('should handle OpportunityStateUpdatedEvent correctly', async () => {
    // Mock the data for UpdateOpportunityStateInput and Metadata
    const mockUpdateOpportunityStateInput: UpdateOpportunityStateInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      state: 'SUBMITTED',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new OpportunityStateUpdatedEvent(mockUpdateOpportunityStateInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.opportunity.update was called correctly
    const expectedCreateObj = {
      data: {
        state: 'SUBMITTED',
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: mockUpdateOpportunityStateInput.id,
      },
    };

    expect(mockPrismaService.opportunity.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
