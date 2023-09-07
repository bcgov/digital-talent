import { ElistDeletedEvent } from './elist-deleted.event';
import { ElistDeletedHandler } from './elist-deleted.handler';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteElistInput } from '../../inputs/delete-elist.input';

describe('ElistDeletedHandler', () => {
  let handler: ElistDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { elist: { update: jest.fn() } };
    handler = new ElistDeletedHandler(mockPrismaService);
  });

  it('should handle ElistDeletedEvent correctly', async () => {
    // Mock the data for DeleteElistInput and Metadata
    const mockDeleteElistInput: DeleteElistInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new ElistDeletedEvent(mockDeleteElistInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.elist.create was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: {
        id: mockDeleteElistInput.id,
      },
    };

    expect(mockPrismaService.elist.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
