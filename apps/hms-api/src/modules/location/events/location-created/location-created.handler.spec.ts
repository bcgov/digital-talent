import { LocationCreatedEvent } from './location-created.event';
import { LocationCreatedHandler } from './location-created.handler';
import { CreateLocationInput } from '../../inputs/create-location.input';
import { Metadata } from '../../../event-store/types/metadata.type';

describe('LocationCreatedHandler', () => {
  let handler: LocationCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { location: { create: jest.fn() } };
    handler = new LocationCreatedHandler(mockPrismaService);
  });

  it('should handle LocationCreatedEvent correctly', async () => {
    // Mock the data for CreateLocationInput and Metadata
    const mockCreateLocationInput: CreateLocationInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      deltek_id: 'test_deltek_id',
      name: 'test_name',
      postal_code: 'V9M 3K2',
      lat: 0.23,
      lon: 0.25,
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new LocationCreatedEvent(mockCreateLocationInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.location.create was called correctly
    const expectedCreateObj = {
      data: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        deltek_id: 'test_deltek_id',
        name: 'test_name',
        postal_code: 'V9M 3K2',
        lat: 0.23,
        lon: 0.25,
        created_at: mockMetadata.created_at,
      },
    };

    expect(mockPrismaService.location.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
