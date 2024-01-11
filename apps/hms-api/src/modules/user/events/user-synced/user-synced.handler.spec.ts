import { UserSyncedEvent } from './user-synced.event';
import { UserSyncedHandler } from './user-synced.handler';
import { SyncUserInput } from '../../inputs/sync-user.input';
import { Metadata } from '../../../event-store/types/metadata.type';

describe('UserSyncedHandler', () => {
  let handler: UserSyncedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { user: { upsert: jest.fn() } };
    handler = new UserSyncedHandler(mockPrismaService);
  });

  it('should handle UserSyncedEvent correctly', async () => {
    // Mock the data for SyncUserInput and Metadata
    const mockSyncUserInput: SyncUserInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      email: 'test@test.com',
      roles: ['role1', 'role2'],
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new UserSyncedEvent(mockSyncUserInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.user.create was called correctly
    const expectedSyncObj = {
      create: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        email: 'test@test.com',
        roles: ['role1', 'role2'],
        created_at: mockMetadata.created_at,
      },
      update: {
        deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        email: 'test@test.com',
        roles: ['role1', 'role2'],
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      },
    };

    expect(mockPrismaService.user.upsert).toHaveBeenCalledWith(expectedSyncObj);
  });
});
