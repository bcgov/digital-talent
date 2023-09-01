import { ApplicationLocationDeletedEvent } from './application-location-deleted.event';
import { ApplicationLocationDeletedHandler } from './application-location-deleted.handler';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteApplicationLocationInput } from '../../inputs/delete-application-location.input';

describe('ApplicationLocationDeletedHandler', () => {
  let handler: ApplicationLocationDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { applicationLocation: { update: jest.fn() } };
    handler = new ApplicationLocationDeletedHandler(mockPrismaService);
  });

  it('should handle ApplicationLocationDeletedEvent correctly', async () => {
    // Mock the data for DeleteApplicationLocationInput and Metadata
    const mockDeleteApplicationLocationInput: DeleteApplicationLocationInput = {
      application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new ApplicationLocationDeletedEvent(mockDeleteApplicationLocationInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.application.create was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
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
