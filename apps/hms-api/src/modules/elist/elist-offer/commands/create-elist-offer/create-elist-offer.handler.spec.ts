import { EventStoreDBClient } from '@eventstore/db-client';
import { ModuleRef } from '@nestjs/core';
import { CommandBus, EventBus, IEvent, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateElistOfferInput } from '../../inputs/create-elist-offer.input';
import { CreateElistOfferCommand } from './create-elist-offer.command';
import { CreateElistOfferHandler } from './create-elist-offer.handler';

describe('CreateElistOfferHandler', () => {
  let handler: CreateElistOfferHandler;
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
    handler = new CreateElistOfferHandler(mockEventBus, mockEventStore as EventStoreDBClient);
  });

  it('should handle CreateElistOfferCommand correctly', async () => {
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

    // Mock for CreateElistOfferInput
    const mockCreateElistOfferInput: CreateElistOfferInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      elist_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      opportunity_id: '1ff777ef-328d-41f8-9ada-339acf1b8ace',
      is_accepted: true,
    };

    const command = new CreateElistOfferCommand(mockCreateElistOfferInput, mockMetadata);

    await handler.execute(command);

    // Check the event bus was triggered with the expected events
    expect(mockEventBus.publishAll).toHaveBeenCalledWith([
      {
        type: 'ElistOfferCreatedEvent',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          elist_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          opportunity_id: '1ff777ef-328d-41f8-9ada-339acf1b8ace',
          is_accepted: true,
        },
        metadata: expect.objectContaining({
          created_at: expect.any(String), // Here, we just expect a string timestamp
          created_by: 'test-user-id',
        }),
      },
    ]);
  });
});
