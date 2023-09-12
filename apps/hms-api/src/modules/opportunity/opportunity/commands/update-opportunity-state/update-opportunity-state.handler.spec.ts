import { EventStoreDBClient } from '@eventstore/db-client';
import { ModuleRef } from '@nestjs/core';
import { CommandBus, EventBus, IEvent, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateOpportunityStateInput } from '../../inputs/update-opportunity-state.input';
import { UpdateOpportunityStateCommand } from './update-opportunity-state.command';
import { UpdateOpportunityStateHandler } from './update-opportunity-state.handler';

describe('UpdateOpportunityStateHandler', () => {
  let handler: UpdateOpportunityStateHandler;
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
    handler = new UpdateOpportunityStateHandler(mockEventBus, mockEventStore as EventStoreDBClient);
  });

  it('should handle UpdateOpportunityStateCommand correctly', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function, func-names
    mockReadStream.mockImplementationOnce(async function* () {
      yield {
        event: {
          type: 'OpportunityStateCreatedEvent',
          data: JSON.stringify({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            state: 'SUBMITTED',
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

    // Mock for UpdateOpportunityStateInput
    const mockUpdateOpportunityStateInput: UpdateOpportunityStateInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      state: 'APPROVED',
    };

    const command = new UpdateOpportunityStateCommand(mockUpdateOpportunityStateInput, mockMetadata);

    await handler.execute(command);
    // Check the event bus was triggered with the expected events
    expect(mockEventBus.publishAll).toHaveBeenCalledWith([
      {
        type: 'OpportunityStateUpdatedEvent',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          state: 'APPROVED',
        },
        metadata: expect.objectContaining({
          created_at: expect.any(String),
          created_by: 'test-user-id',
          // updated_at: expect.any(String),
        }),
      },
    ]);
  });
});
