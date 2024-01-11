import { ModuleRef } from '@nestjs/core';
import { CommandBus, EventBus, IEvent, UnhandledExceptionBus } from '@nestjs/cqrs';
import { EventStoreDBClient } from '@eventstore/db-client';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateMinistryInput } from '../../inputs/update-ministry.input';
import { UpdateMinistryCommand } from './update-ministry.command';
import { UpdateMinistryHandler } from './update-ministry.handler';

describe('UpdateMinistryHandler', () => {
  let handler: UpdateMinistryHandler;
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
    handler = new UpdateMinistryHandler(mockEventBus, mockEventStore as EventStoreDBClient);
  });

  it('should handle UpdateMinistryCommand correctly', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function, func-names
    mockReadStream.mockImplementationOnce(async function* () {
      yield {
        event: {
          type: 'MinistryCreatedEvent',
          data: JSON.stringify({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            deltek_id: 'test_deltek_id',
            name: 'test_name',
          }),
          metadata: JSON.stringify({
            created_at: '2023-08-20T12:00:00Z',
            created_by: 'test-user-id',
          }),
        },
      };
    });

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

    // Mock for UpdateMinistryInput
    const mockUpdateMinistryInput: UpdateMinistryInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      deltek_id: 'test_deltek_id_2',
      name: 'test_name_2',
    };

    const command = new UpdateMinistryCommand(mockUpdateMinistryInput, mockMetadata);

    await handler.execute(command);
    // Check the event bus was triggered with the expected events
    expect(mockEventBus.publishAll).toHaveBeenCalledWith([
      {
        type: 'MinistryUpdatedEvent',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          deltek_id: 'test_deltek_id_2',
          name: 'test_name_2',
        },
        metadata: expect.objectContaining({
          created_at: expect.any(String),
          created_by: 'test-user-id',
        }),
      },
    ]);
  });
});
