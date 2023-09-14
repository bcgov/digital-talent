import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateOpportunityLocationInput } from '../../inputs/create-opportunity-location.input';
import { OpportunityLocationCreatedEvent } from './opportunity-location-created.event';
import { OpportunityLocationCreatedHandler } from './opportunity-location-created.handler';

describe('OpportunityLocationCreatedHandler', () => {
  let handler: OpportunityLocationCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { opportunityLocation: { create: jest.fn() } };
    handler = new OpportunityLocationCreatedHandler(mockPrismaService);
  });

  it('should handle OpportunityLocationCreatedEvent correctly', async () => {
    // Mock the data for CreateOpportunityLocationInput and Metadata
    const mockCreateOpportunityLocationInput: CreateOpportunityLocationInput = {
      opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new OpportunityLocationCreatedEvent(mockCreateOpportunityLocationInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.opportunity-location.create was called correctly
    const expectedCreateObj = {
      data: {
        opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        created_at: mockMetadata.created_at,
      },
    };

    expect(mockPrismaService.opportunityLocation.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
