import { ModuleRef } from '@nestjs/core';
import { CommandBus, EventBus, IEvent, UnhandledExceptionBus } from '@nestjs/cqrs';
import { EventStoreDBClient } from '@eventstore/db-client';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncAccountCommand } from './sync-account.command';
import { SyncAccountHandler } from './sync-account.handler';
import { SyncAccountDto } from '../../dtos/sync-account.dto';

describe('SyncAccountHandler', () => {
  let handler: SyncAccountHandler;
  let mockEventBus: MockEventBus;
  const mockReadStream = jest.fn();
  const mockAppendToStream = jest.fn();

  const mockCommandBus = {} as CommandBus;
  const mockModuleRef = {} as ModuleRef;
  const mockUnhandledExceptionBus = {} as UnhandledExceptionBus;

  class MockEventBus extends EventBus<IEvent> {
    publishAll = jest.fn();

    constructor() {
      super(mockCommandBus, mockModuleRef, mockUnhandledExceptionBus);
    }
  }
  const mockEventStore: Partial<EventStoreDBClient> = {
    readStream: mockReadStream,
    appendToStream: mockAppendToStream,
  };

  beforeEach(() => {
    mockReadStream.mockReset();
    mockAppendToStream.mockReset();
    mockEventBus = new MockEventBus();
    handler = new SyncAccountHandler(mockEventBus, mockEventStore as EventStoreDBClient);
  });

  it('should handle SyncAccountCommand correctly', async () => {
    // Given: No previous events in the stream
    // eslint-disable-next-line @typescript-eslint/no-empty-function, func-names
    mockReadStream.mockImplementationOnce(async function* () {});

    // Mock for Metadata
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-account-id',
    };

    // Given: Mocking the result of the handle method
    mockAppendToStream.mockResolvedValue({
      success: true,
      events: [], // Add mock events here if needed.
    });

    // Mock for SyncAccountInput
    const mockSyncAccountInput: SyncAccountDto = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      name: 'test_name',
      email: 'test@test.com',
      roles: ['role1', 'role2'],
      sub: 'test_sub',
      identity_provider: 'test_identity_provider',
    };

    const command = new SyncAccountCommand(mockSyncAccountInput, mockMetadata);

    await handler.execute(command);

    // Check the event bus was triggered with the expected events
    expect(mockEventBus.publishAll).toHaveBeenCalledWith([
      {
        type: 'AccountSyncedEvent',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          name: 'test_name',
          email: 'test@test.com',
          roles: ['role1', 'role2'],
          sub: 'test_sub',
          identity_provider: 'test_identity_provider',
        },
        metadata: expect.objectContaining({
          created_at: expect.any(String), // Here, we just expect a string timestamp
          created_by: 'test-account-id',
        }),
      },
    ]);
  });
});
