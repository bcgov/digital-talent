import { MinistryCreatedEvent } from './ministry-created.event';
import { MinistryCreatedHandler } from './ministry-created.handler';
import { CreateMinistryInput } from '../../inputs/create-ministry.input';
import { Metadata } from '../../../event-store/types/metadata.type';

describe('MinistryCreatedHandler', () => {
  let handler: MinistryCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { ministry: { create: jest.fn() } };
    handler = new MinistryCreatedHandler(mockPrismaService);
  });

  it('should handle MinistryCreatedEvent correctly', async () => {
    // Mock the data for CreateMinistryInput and Metadata
    const mockCreateMinistryInput: CreateMinistryInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      deltek_id: 'test_deltek_id',
      name: 'test_name',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new MinistryCreatedEvent(mockCreateMinistryInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.ministry.create was called correctly
    const expectedCreateObj = {
      data: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        deltek_id: 'test_deltek_id',
        name: 'test_name',
        created_at: mockMetadata.created_at,
      },
    };

    expect(mockPrismaService.ministry.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
