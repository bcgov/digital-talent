import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteOpportunityLocationInput } from '../../inputs/delete-opportunity-location.input';
import { OpportunityLocationDeletedEvent } from './opportunity-location-deleted.event';
import { OpportunityLocationDeletedHandler } from './opportunity-location-deleted.handler';

describe('OpportunityLocationDeletedHandler', () => {
  let handler: OpportunityLocationDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { opportunityLocation: { update: jest.fn() } };
    handler = new OpportunityLocationDeletedHandler(mockPrismaService);
  });

  it('should handle OpportunityLocationDeletedEvent correctly', async () => {
    // Mock the data for DeleteOpportunityLocationInput and Metadata
    const mockDeleteOpportunityLocationInput: DeleteOpportunityLocationInput = {
      opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new OpportunityLocationDeletedEvent(mockDeleteOpportunityLocationInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.opportunity-location.create was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: {
        opportunity_id_location_id: {
          opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        },
      },
    };

    expect(mockPrismaService.opportunityLocation.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
