import { ModuleRef } from '@nestjs/core';
import { CommandBus, EventBus, IEvent, UnhandledExceptionBus } from '@nestjs/cqrs';
import { EventStoreDBClient } from '@eventstore/db-client';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteGridInput } from '../../inputs/delete-grid.input';
import { DeleteGridCommand } from './delete-grid.command';
import { DeleteGridHandler } from './delete-grid.handler';

describe('DeleteGridHandler', () => {
  let handler: DeleteGridHandler;
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
    handler = new DeleteGridHandler(mockEventBus, mockEventStore as EventStoreDBClient);
  });

  it('should handle DeleteGridCommand correctly', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function, func-names
    mockReadStream.mockImplementationOnce(async function* () {
      yield {
        event: {
          type: 'GridCreatedEvent', // this mocks an grid being created earlier in eventstoredb
          data: JSON.stringify({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            affiliation: 'BCGEU',
            name: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            steps: [
              {
                name: 1,
                rate_per_hour: 44.1627,
                rate_per_year: 80652.2,
                rate_per_month: 6721.02,
                rate_per_fortnight: 3091.39,
              },
              {
                name: 2,
                rate_per_hour: 45.4873,
                rate_per_year: 83071.2,
                rate_per_month: 6922.6,
                rate_per_fortnight: 3184.11,
              },
            ],
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

    // Mock for DeleteGridInput
    const mockDeleteGridInput: DeleteGridInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    };

    const command = new DeleteGridCommand(mockDeleteGridInput, mockMetadata);

    await handler.execute(command);

    // Check the event bus was triggered with the expected events
    expect(mockEventBus.publishAll).toHaveBeenCalledWith([
      {
        type: 'GridDeletedEvent',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        },
        metadata: expect.objectContaining({
          created_at: expect.any(String),
          created_by: 'test-user-id',
        }),
      },
    ]);
  });
});
