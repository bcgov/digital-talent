import { LocationUpdatedEvent } from './location-updated.event';
import { LocationUpdatedHandler } from './location-updated.handler';
import { UpdateLocationInput } from '../../inputs/update-location.input';
import { Metadata } from '../../../event-store/types/metadata.type';

describe('LocationUpdatedHandler', () => {
  let handler: LocationUpdatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { location: { update: jest.fn() } };
    handler = new LocationUpdatedHandler(mockPrismaService);
  });

  it('should handle LocationUpdatedEvent correctly', async () => {
    // Mock the data for UpdateLocationInput and Metadata
    const mockUpdateLocationInput: UpdateLocationInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      deltek_id: 'test_deltek_id',
      name: 'test_name',
      postal_code: 'V9M 3K2',
      lat: 0.23,
      lon: 0.25,
      region: 'CARIBOO',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new LocationUpdatedEvent(mockUpdateLocationInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.location.create was called correctly
    const expectedCreateObj = {
      data: {
        deltek_id: 'test_deltek_id',
        name: 'test_name',
        postal_code: 'V9M 3K2',
        lat: 0.23,
        lon: 0.25,
        region: 'CARIBOO',
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: mockUpdateLocationInput.id,
      },
    };

    expect(mockPrismaService.location.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
