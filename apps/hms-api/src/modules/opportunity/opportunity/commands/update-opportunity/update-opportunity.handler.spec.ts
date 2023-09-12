import { EventStoreDBClient } from '@eventstore/db-client';
import { ModuleRef } from '@nestjs/core';
import { CommandBus, EventBus, IEvent, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateOpportunityInput } from '../../inputs/update-opportunity.input';
import { UpdateOpportunityCommand } from './update-opportunity.command';
import { UpdateOpportunityHandler } from './update-opportunity.handler';

describe('UpdateOpportunityHandler', () => {
  let handler: UpdateOpportunityHandler;
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
    handler = new UpdateOpportunityHandler(mockEventBus, mockEventStore as EventStoreDBClient);
  });

  it('should handle UpdateOpportunityCommand correctly', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function, func-names
    mockReadStream.mockImplementationOnce(async function* () {
      yield {
        event: {
          type: 'OpportunityCreatedEvent',
          data: JSON.stringify({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
            hiring_manager_id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
            ministry_id: 'd290f1ee-6c54-4b01-90e6-d701748f0855',
            involvement: 'FULL',
            work_option: 'HYBRID',
            description: 'description',
            candidate_description: 'candidate description',
            team_name: 'team',
            team_description: 'team description',
            work_examples: 'work examples',
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

    // Mock for UpdateOpportunityInput
    const mockUpdateOpportunityInput: UpdateOpportunityInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
      deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
      hiring_manager_id: 'd290f1ee-6c54-4b01-90e6-d701748f0855',
      ministry_id: 'd290f1ee-6c54-4b01-90e6-d701748f0856',
      involvement: 'NONE',
      work_option: 'REMOTE',
      description: 'new description',
      candidate_description: 'new candidate description',
      team_name: 'new team',
      team_description: 'new team description',
      work_examples: 'new work examples',
    };

    const command = new UpdateOpportunityCommand(mockUpdateOpportunityInput, mockMetadata);

    await handler.execute(command);
    // Check the event bus was triggered with the expected events
    expect(mockEventBus.publishAll).toHaveBeenCalledWith([
      {
        type: 'OpportunityUpdatedEvent',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
          deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
          hiring_manager_id: 'd290f1ee-6c54-4b01-90e6-d701748f0855',
          ministry_id: 'd290f1ee-6c54-4b01-90e6-d701748f0856',
          involvement: 'NONE',
          work_option: 'REMOTE',
          description: 'new description',
          candidate_description: 'new candidate description',
          team_name: 'new team',
          team_description: 'new team description',
          work_examples: 'new work examples',
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
