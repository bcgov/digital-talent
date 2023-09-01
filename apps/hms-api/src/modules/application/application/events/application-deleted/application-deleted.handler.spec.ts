import { ApplicationDeletedEvent } from './application-deleted.event';
import { ApplicationDeletedHandler } from './application-deleted.handler';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteApplicationInput } from '../../inputs/delete-application.input';

describe('ApplicationDeletedHandler', () => {
  let handler: ApplicationDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { application: { update: jest.fn() } };
    handler = new ApplicationDeletedHandler(mockPrismaService);
  });

  it('should handle ApplicationDeletedEvent correctly', async () => {
    // Mock the data for DeleteApplicationInput and Metadata
    const mockDeleteApplicationInput: DeleteApplicationInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new ApplicationDeletedEvent(mockDeleteApplicationInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.application.create was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: {
        id: mockDeleteApplicationInput.id,
      },
    };

    expect(mockPrismaService.application.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
