import { EventStoreDBClient } from '@eventstore/db-client';
import { ModuleRef } from '@nestjs/core';
import { CommandBus, EventBus, IEvent, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { DeleteOpportunityLocationInput } from '../../inputs/delete-opportunity-location.input';
import { DeleteOpportunityLocationCommand } from './delete-opportunity-location.command';
import { DeleteOpportunityLocationHandler } from './delete-opportunity-location.handler';

describe('DeleteOpportunityLocationHandler', () => {
  let handler: DeleteOpportunityLocationHandler;
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
    handler = new DeleteOpportunityLocationHandler(mockEventBus, mockEventStore as EventStoreDBClient);
  });

  it('should handle DeleteOpportunityLocationCommand correctly', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function, func-names
    mockReadStream.mockImplementationOnce(async function* () {
      yield {
        event: {
          type: 'OpportunityLocationCreatedEvent', // this mocks an comment being created earlier in eventstoredb
          data: JSON.stringify({
            opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
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

    // Mock for DeleteOpportunityLocationInput
    const mockDeleteOpportunityLocationInput: DeleteOpportunityLocationInput = {
      opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    };

    const command = new DeleteOpportunityLocationCommand(mockDeleteOpportunityLocationInput, mockMetadata);

    await handler.execute(command);

    // Check the event bus was triggered with the expected events
    expect(mockEventBus.publishAll).toHaveBeenCalledWith([
      expect.objectContaining({
        type: 'OpportunityLocationDeletedEvent',
        data: {
          opportunity_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          location_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        },
        metadata: {
          created_at: expect.any(String),
          created_by: 'test-user-id',
        },
      }),
    ]);
  });
});
