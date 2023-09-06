import { ModuleRef } from '@nestjs/core';
import { CommandBus, EventBus, IEvent, UnhandledExceptionBus } from '@nestjs/cqrs';
import { EventStoreDBClient } from '@eventstore/db-client';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { RemoveCompetitionSkillInput } from '../../inputs/remove-competition-skill.input';
import { RemoveCompetitionSkillCommand } from './remove-competition-skill.command';
import { RemoveCompetitionSkillHandler } from './remove-competition-skill.handler';

describe('RemoveCompetitionSkillHandler', () => {
  let handler: RemoveCompetitionSkillHandler;
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
    handler = new RemoveCompetitionSkillHandler(mockEventBus, mockEventStore as EventStoreDBClient);
  });

  it('should handle RemoveCompetitionSkillCommand correctly', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function, func-names
    mockReadStream.mockImplementationOnce(async function* () {
      yield {
        event: {
          type: 'CompetitionSkillAddedEvent', // this mocks an competition-skill being created earlier in eventstoredb
          data: JSON.stringify({
            competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            min_years_experience: 2,
            is_required: true,
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

    // Mock for RemoveCompetitionSkillInput
    const mockRemoveCompetitionSkillInput: RemoveCompetitionSkillInput = {
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    };

    const command = new RemoveCompetitionSkillCommand(mockRemoveCompetitionSkillInput, mockMetadata);

    await handler.execute(command);

    // Check the event bus was triggered with the expected events
    expect(mockEventBus.publishAll).toHaveBeenCalledWith([
      {
        type: 'CompetitionSkillRemovedEvent',
        data: {
          competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          skill_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
        },
        metadata: expect.objectContaining({
          created_at: expect.any(String),
          created_by: 'test-user-id',
        }),
      },
    ]);
  });
});
