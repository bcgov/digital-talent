import { MinistryDeletedEvent } from './ministry-deleted.event';
import { MinistryDeletedHandler } from './ministry-deleted.handler';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteMinistryInput } from '../../inputs/delete-ministry.input';

describe('MinistryDeletedHandler', () => {
  let handler: MinistryDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { ministry: { update: jest.fn() } };
    handler = new MinistryDeletedHandler(mockPrismaService);
  });

  it('should handle MinistryDeletedEvent correctly', async () => {
    // Mock the data for DeleteMinistryInput and Metadata
    const mockDeleteMinistryInput: DeleteMinistryInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new MinistryDeletedEvent(mockDeleteMinistryInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.ministry.create was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: {
        id: mockDeleteMinistryInput.id,
      },
    };

    expect(mockPrismaService.ministry.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
