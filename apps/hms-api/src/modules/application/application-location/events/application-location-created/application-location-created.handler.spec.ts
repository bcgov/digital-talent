import { ApplicationLocationCreatedEvent } from './application-location-created.event';
import { ApplicationLocationCreatedHandler } from './application-location-created.handler';
import { CreateApplicationLocationInput } from '../../inputs/create-application-location.input';
import { Metadata } from '../../../../event-store/types/metadata.type';

describe('ApplicationLocationCreatedHandler', () => {
  let handler: ApplicationLocationCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { applicationLocation: { create: jest.fn() } };
    handler = new ApplicationLocationCreatedHandler(mockPrismaService);
  });

  it('should handle ApplicationLocationCreatedEvent correctly', async () => {
    // Mock the data for CreateApplicationLocationInput and Metadata
    const mockCreateApplicationLocationInput: CreateApplicationLocationInput = {
      application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      rank: 3,
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new ApplicationLocationCreatedEvent(mockCreateApplicationLocationInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.application.create was called correctly
    const expectedCreateObj = {
      data: {
        application_id: mockCreateApplicationLocationInput.application_id,
        location_id: mockCreateApplicationLocationInput.location_id,
        rank: 3,
        created_at: mockMetadata.created_at,
      },
    };

    expect(mockPrismaService.applicationLocation.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
