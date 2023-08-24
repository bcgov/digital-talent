import { ApplicationLocationUpdatedEvent } from './application-location-updated.event';
import { ApplicationLocationUpdatedHandler } from './application-location-updated.handler';
import { UpdateApplicationLocationInput } from '../../inputs/update-application-location.input';
import { Metadata } from '../../../../event-store/types/metadata.type';

describe('ApplicationLocationUpdatedHandler', () => {
  let handler: ApplicationLocationUpdatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { applicationLocation: { update: jest.fn() } };
    handler = new ApplicationLocationUpdatedHandler(mockPrismaService);
  });

  it('should handle ApplicationLocationUpdatedEvent correctly', async () => {
    // Mock the data for UpdateApplicationLocationInput and Metadata
    const mockUpdateApplicationLocationInput: UpdateApplicationLocationInput = {
      application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      rank: 5,
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new ApplicationLocationUpdatedEvent(mockUpdateApplicationLocationInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.application.create was called correctly
    const expectedCreateObj = {
      data: {
        rank: 5,
        updated_at: mockMetadata.created_at,
      },
      where: {
        application_id_location_id: {
          application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        },
      },
    };

    expect(mockPrismaService.applicationLocation.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
