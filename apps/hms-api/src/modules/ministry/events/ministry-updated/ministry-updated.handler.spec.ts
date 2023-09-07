import { MinistryUpdatedEvent } from './ministry-updated.event';
import { MinistryUpdatedHandler } from './ministry-updated.handler';
import { UpdateMinistryInput } from '../../inputs/update-ministry.input';
import { Metadata } from '../../../event-store/types/metadata.type';

describe('MinistryUpdatedHandler', () => {
  let handler: MinistryUpdatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { ministry: { update: jest.fn() } };
    handler = new MinistryUpdatedHandler(mockPrismaService);
  });

  it('should handle MinistryUpdatedEvent correctly', async () => {
    // Mock the data for UpdateMinistryInput and Metadata
    const mockUpdateMinistryInput: UpdateMinistryInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      deltek_id: 'test_deltek_id',
      name: 'test_name',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new MinistryUpdatedEvent(mockUpdateMinistryInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.ministry.create was called correctly
    const expectedCreateObj = {
      data: {
        deltek_id: 'test_deltek_id',
        name: 'test_name',
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: mockUpdateMinistryInput.id,
      },
    };

    expect(mockPrismaService.ministry.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
