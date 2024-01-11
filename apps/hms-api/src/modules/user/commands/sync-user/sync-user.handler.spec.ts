import { ModuleRef } from '@nestjs/core';
import { CommandBus, EventBus, IEvent, UnhandledExceptionBus } from '@nestjs/cqrs';
import { EventStoreDBClient } from '@eventstore/db-client';
import { Metadata } from '../../../event-store/types/metadata.type';
import { SyncUserInput } from '../../inputs/sync-user.input';
import { SyncUserCommand } from './sync-user.command';
import { SyncUserHandler } from './sync-user.handler';

describe('SyncUserHandler', () => {
  let handler: SyncUserHandler;
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
    handler = new SyncUserHandler(mockEventBus, mockEventStore as EventStoreDBClient);
  });

  it('should handle SyncUserCommand correctly', async () => {
    // Given: No previous events in the stream
    // eslint-disable-next-line @typescript-eslint/no-empty-function, func-names
    mockReadStream.mockImplementationOnce(async function* () {});

    // Mock for Metadata
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    // Given: Mocking the result of the handle method
    mockAppendToStream.mockResolvedValue({
      success: true,
      events: [], // Add mock events here if needed.
    });

    // Mock for SyncUserInput
    const mockSyncUserInput: SyncUserInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      email: 'test@test.com',
      roles: ['role1', 'role2'],
    };

    const command = new SyncUserCommand(mockSyncUserInput, mockMetadata);

    await handler.execute(command);

    // Check the event bus was triggered with the expected events
    expect(mockEventBus.publishAll).toHaveBeenCalledWith([
      {
        type: 'UserSyncedEvent',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          email: 'test@test.com',
          roles: ['role1', 'role2'],
        },
        metadata: expect.objectContaining({
          created_at: expect.any(String), // Here, we just expect a string timestamp
          created_by: 'test-user-id',
        }),
      },
    ]);
  });
});
