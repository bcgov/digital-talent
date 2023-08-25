import { PositionDeletedEvent } from './position-deleted.event';
import { PositionDeletedHandler } from './position-deleted.handler';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeletePositionInput } from '../../inputs/delete-position.input';

describe('PositionDeletedHandler', () => {
  let handler: PositionDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { position: { update: jest.fn() } };
    handler = new PositionDeletedHandler(mockPrismaService);
  });

  it('should handle PositionDeletedEvent correctly', async () => {
    // Mock the data for DeletePositionInput and Metadata
    const mockDeletePositionInput: DeletePositionInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new PositionDeletedEvent(mockDeletePositionInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.position.create was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: {
        id: mockDeletePositionInput.id,
      },
    };

    expect(mockPrismaService.position.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
