import { OccupationGroupDeletedEvent } from './occupation-group-deleted.event';
import { OccupationGroupDeletedHandler } from './occupation-group-deleted.handler';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteOccupationGroupInput } from '../../inputs/delete-occupation-group.input';

describe('OccupationGroupDeletedHandler', () => {
  let handler: OccupationGroupDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { occupationGroup: { update: jest.fn() } };
    handler = new OccupationGroupDeletedHandler(mockPrismaService);
  });

  it('should handle OccupationGroupDeletedEvent correctly', async () => {
    // Mock the data for DeleteOccupationGroupInput and Metadata
    const mockDeleteOccupationGroupInput: DeleteOccupationGroupInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new OccupationGroupDeletedEvent(mockDeleteOccupationGroupInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.occupation-group.create was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: {
        id: mockDeleteOccupationGroupInput.id,
      },
    };

    expect(mockPrismaService.occupationGroup.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
