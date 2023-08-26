import { PositionCreatedEvent } from './position-created.event';
import { PositionCreatedHandler } from './position-created.handler';
import { CreatePositionInput } from '../../inputs/create-position.input';
import { Metadata } from '../../../../event-store/types/metadata.type';

describe('PositionCreatedHandler', () => {
  let handler: PositionCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { position: { create: jest.fn() } };
    handler = new PositionCreatedHandler(mockPrismaService);
  });

  it('should handle PositionCreatedEvent correctly', async () => {
    // Mock the data for CreatePositionInput and Metadata
    const mockCreatePositionInput: CreatePositionInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      category: 'BAND',
      name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      description: 'asdf',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new PositionCreatedEvent(mockCreatePositionInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.position.create was called correctly
    const expectedCreateObj = {
      data: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        category: 'BAND',
        name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        description: 'asdf',
        created_at: mockMetadata.created_at,
      },
    };

    expect(mockPrismaService.position.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
