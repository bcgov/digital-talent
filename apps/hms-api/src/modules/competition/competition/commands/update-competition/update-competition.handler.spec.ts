import { ModuleRef } from '@nestjs/core';
import { CommandBus, EventBus, IEvent, UnhandledExceptionBus } from '@nestjs/cqrs';
import { EventStoreDBClient } from '@eventstore/db-client';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateCompetitionInput } from '../../inputs/update-competition.input';
import { UpdateCompetitionCommand } from './update-competition.command';
import { UpdateCompetitionHandler } from './update-competition.handler';

describe('UpdateCompetitionHandler', () => {
  let handler: UpdateCompetitionHandler;
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
    handler = new UpdateCompetitionHandler(mockEventBus, mockEventStore as EventStoreDBClient);
  });

  it('should handle UpdateCompetitionCommand correctly', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function, func-names
    mockReadStream.mockImplementationOnce(async function* () {
      yield {
        event: {
          type: 'CompetitionCreatedEvent',
          data: JSON.stringify({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            job_description_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            recruiter_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            category: 'CMH',
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

    // Mock for UpdateCompetitionInput
    const mockUpdateCompetitionInput: UpdateCompetitionInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      job_description_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
      deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
      recruiter_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
      category: 'RH',
    };

    const command = new UpdateCompetitionCommand(mockUpdateCompetitionInput, mockMetadata);

    await handler.execute(command);
    // Check the event bus was triggered with the expected events
    expect(mockEventBus.publishAll).toHaveBeenCalledWith([
      {
        type: 'CompetitionUpdatedEvent',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          job_description_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
          deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
          recruiter_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
          category: 'RH',
        },
        metadata: expect.objectContaining({
          created_at: expect.any(String),
          created_by: 'test-user-id',
        }),
      },
    ]);
  });
});
