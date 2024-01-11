import { AccountSyncedEvent } from './account-synced.event';
import { AccountSyncedHandler } from './account-synced.handler';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncAccountDto } from '../../dtos/sync-account.dto';

describe('AccountSyncedHandler', () => {
  let handler: AccountSyncedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { identity: { upsert: jest.fn() }, user: { upsert: jest.fn() }, $transaction: jest.fn() };
    handler = new AccountSyncedHandler(mockPrismaService);
  });

  it('should handle AccountSyncedEvent correctly', async () => {
    // Mock the data for SyncAccountInput and Metadata
    const mockSyncAccountInput: SyncAccountDto = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      name: 'test_name',
      email: 'test@test.com',
      roles: ['role1', 'role2'],
      sub: 'test_sub',
      identity_provider: 'test_identity_provider',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-account-id',
    };

    const event = new AccountSyncedEvent(mockSyncAccountInput, mockMetadata);

    await handler.handle(event);

    const expectedSyncObj = {
      create: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        name: 'test_name',
        email: 'test@test.com',
        roles: ['role1', 'role2'],
        created_at: mockMetadata.created_at,
      },
      update: {
        name: 'test_name',
        email: 'test@test.com',
        roles: ['role1', 'role2'],
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      },
    };

    expect(mockPrismaService.user.upsert).toHaveBeenCalledWith(expectedSyncObj);

    // Assert that mockPrismaService.account.create was called correctly
    const expectedSyncObj2 = {
      create: {
        user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        sub: 'test_sub',
        identity_provider: 'test_identity_provider',
        created_at: mockMetadata.created_at,
      },
      update: {
        user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        sub: 'test_sub',
        identity_provider: 'test_identity_provider',
        updated_at: mockMetadata.created_at,
      },
      where: {
        sub_identity_provider: { identity_provider: 'test_identity_provider', sub: 'test_sub' },
      },
    };

    expect(mockPrismaService.identity.upsert).toHaveBeenCalledWith(expectedSyncObj2);
  });

  it('should not upsert identity when sub and identity_provider are not given', async () => {
    // Mock the data for SyncAccountInput and Metadata
    const mockSyncAccountInput: SyncAccountDto = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      name: 'test_name',
      email: 'test@test.com',
      roles: ['role1', 'role2'],
      sub: null,
      identity_provider: null,
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-account-id',
    };

    const event = new AccountSyncedEvent(mockSyncAccountInput, mockMetadata);

    await handler.handle(event);

    const expectedSyncObj = {
      create: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        name: 'test_name',
        email: 'test@test.com',
        roles: ['role1', 'role2'],
        created_at: mockMetadata.created_at,
      },
      update: {
        name: 'test_name',
        email: 'test@test.com',
        roles: ['role1', 'role2'],
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      },
    };

    expect(mockPrismaService.user.upsert).toHaveBeenCalledWith(expectedSyncObj);
    expect(mockPrismaService.identity.upsert).not.toHaveBeenCalled();
  });
});
