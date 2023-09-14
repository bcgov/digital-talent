import { ModuleRef } from '@nestjs/core';
import { CommandBus, EventBus, IEvent, UnhandledExceptionBus } from '@nestjs/cqrs';
import { EventStoreDBClient } from '@eventstore/db-client';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateGridInput } from '../../inputs/create-grid.input';
import { CreateGridCommand } from './create-grid.command';
import { CreateGridHandler } from './create-grid.handler';

describe('CreateGridHandler', () => {
  let handler: CreateGridHandler;
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
    handler = new CreateGridHandler(mockEventBus, mockEventStore as EventStoreDBClient);
  });

  it('should handle CreateGridCommand correctly', async () => {
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

    // Mock for CreateGridInput
    const mockCreateGridInput: CreateGridInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
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
    };

    const command = new CreateGridCommand(mockCreateGridInput, mockMetadata);

    await handler.execute(command);

    // Check the event bus was triggered with the expected events
    expect(mockEventBus.publishAll).toHaveBeenCalledWith([
      {
        type: 'GridCreatedEvent',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
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
        },
        metadata: expect.objectContaining({
          created_at: expect.any(String), // Here, we just expect a string timestamp
          created_by: 'test-user-id',
        }),
      },
    ]);
  });
});
