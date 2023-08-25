import { GridDeletedEvent } from './grid-deleted.event';
import { GridDeletedHandler } from './grid-deleted.handler';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteGridInput } from '../../inputs/delete-grid.input';

describe('GridDeletedHandler', () => {
  let handler: GridDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { grid: { update: jest.fn() } };
    handler = new GridDeletedHandler(mockPrismaService);
  });

  it('should handle GridDeletedEvent correctly', async () => {
    // Mock the data for DeleteGridInput and Metadata
    const mockDeleteGridInput: DeleteGridInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new GridDeletedEvent(mockDeleteGridInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.grid.create was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: {
        id: mockDeleteGridInput.id,
      },
    };

    expect(mockPrismaService.grid.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
