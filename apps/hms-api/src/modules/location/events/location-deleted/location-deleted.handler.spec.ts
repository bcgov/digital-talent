import { LocationDeletedEvent } from './location-deleted.event';
import { LocationDeletedHandler } from './location-deleted.handler';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteLocationInput } from '../../inputs/delete-location.input';

describe('LocationDeletedHandler', () => {
  let handler: LocationDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { location: { update: jest.fn() } };
    handler = new LocationDeletedHandler(mockPrismaService);
  });

  it('should handle LocationDeletedEvent correctly', async () => {
    // Mock the data for DeleteLocationInput and Metadata
    const mockDeleteLocationInput: DeleteLocationInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new LocationDeletedEvent(mockDeleteLocationInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.location.create was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: {
        id: mockDeleteLocationInput.id,
      },
    };

    expect(mockPrismaService.location.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
