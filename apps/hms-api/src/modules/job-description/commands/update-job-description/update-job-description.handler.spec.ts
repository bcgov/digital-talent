import { ModuleRef } from '@nestjs/core';
import { CommandBus, EventBus, IEvent, UnhandledExceptionBus } from '@nestjs/cqrs';
import { EventStoreDBClient } from '@eventstore/db-client';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateJobDescriptionInput } from '../../inputs/update-job-description.input';
import { UpdateJobDescriptionCommand } from './update-job-description.command';
import { UpdateJobDescriptionHandler } from './update-job-description.handler';

describe('UpdateJobDescriptionHandler', () => {
  let handler: UpdateJobDescriptionHandler;
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
    handler = new UpdateJobDescriptionHandler(mockEventBus, mockEventStore as EventStoreDBClient);
  });

  it('should handle UpdateJobDescriptionCommand correctly', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function, func-names
    mockReadStream.mockImplementationOnce(async function* () {
      yield {
        event: {
          type: 'JobDescriptionCreatedEvent',
          data: JSON.stringify({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            e_class_id: 'test_e_class_id',
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

    // Mock for UpdateJobDescriptionInput
    const mockUpdateJobDescriptionInput: UpdateJobDescriptionInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
      e_class_id: 'test_e_class_id_2',
      name: 'test_name_2',
    };

    const command = new UpdateJobDescriptionCommand(mockUpdateJobDescriptionInput, mockMetadata);

    await handler.execute(command);
    // Check the event bus was triggered with the expected events
    expect(mockEventBus.publishAll).toHaveBeenCalledWith([
      {
        type: 'JobDescriptionUpdatedEvent',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
          e_class_id: 'test_e_class_id_2',
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
