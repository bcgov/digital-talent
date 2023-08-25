import { PositionUpdatedEvent } from './position-updated.event';
import { PositionUpdatedHandler } from './position-updated.handler';
import { UpdatePositionInput } from '../../inputs/update-position.input';
import { Metadata } from '../../../../event-store/types/metadata.type';

describe('PositionUpdatedHandler', () => {
  let handler: PositionUpdatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { position: { update: jest.fn() } };
    handler = new PositionUpdatedHandler(mockPrismaService);
  });

  it('should handle PositionUpdatedEvent correctly', async () => {
    // Mock the data for UpdatePositionInput and Metadata
    const mockUpdatePositionInput: UpdatePositionInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      category: 'BAND',
      name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      description: 'asdf',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new PositionUpdatedEvent(mockUpdatePositionInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.position.create was called correctly
    const expectedCreateObj = {
      data: {
        category: 'BAND',
        name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        description: 'asdf',
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: mockUpdatePositionInput.id,
      },
    };

    expect(mockPrismaService.position.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
