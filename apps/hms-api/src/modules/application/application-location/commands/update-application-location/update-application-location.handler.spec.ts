import { ModuleRef } from '@nestjs/core';
import { CommandBus, EventBus, IEvent, UnhandledExceptionBus } from '@nestjs/cqrs';
import { EventStoreDBClient } from '@eventstore/db-client';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateApplicationLocationInput } from '../../inputs/update-application-location.input';
import { UpdateApplicationLocationCommand } from './update-application-location.command';
import { UpdateApplicationLocationHandler } from './update-application-location.handler';

describe('UpdateApplicationLocationHandler', () => {
  let handler: UpdateApplicationLocationHandler;
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
    handler = new UpdateApplicationLocationHandler(mockEventBus, mockEventStore as EventStoreDBClient);
  });

  it('should handle UpdateApplicationLocationCommand correctly', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function, func-names
    mockReadStream.mockImplementationOnce(async function* () {
      yield {
        event: {
          type: 'ApplicationLocationUpdatedEvent',
          data: JSON.stringify({
            application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            rank: 3,
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

    // Mock for UpdateApplicationLocationInput
    const mockUpdateApplicationLocationInput: UpdateApplicationLocationInput = {
      application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      rank: 3,
    };

    const command = new UpdateApplicationLocationCommand(mockUpdateApplicationLocationInput, mockMetadata);

    await handler.execute(command);
    // Check the event bus was triggered with the expected events
    expect(mockEventBus.publishAll).toHaveBeenCalledWith([
      {
        type: 'ApplicationLocationUpdatedEvent',
        data: {
          application_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          rank: 3,
        },
        metadata: expect.objectContaining({
          created_at: expect.any(String),
          created_by: 'test-user-id',
        }),
      },
    ]);
  });
});
