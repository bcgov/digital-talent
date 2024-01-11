import { EventStoreDBClient } from '@eventstore/db-client';
import { ModuleRef } from '@nestjs/core';
import { CommandBus, EventBus, IEvent, UnhandledExceptionBus } from '@nestjs/cqrs';
import { CompetitionState } from '../../../../@generated/prisma-nestjs-graphql';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateCompetitionScheduleInput } from '../../inputs/update-competition-schedule.input';
import { UpdateCompetitionScheduleCommand } from './update-competition-schedule.command';
import { UpdateCompetitionScheduleHandler } from './update-competition-schedule.handler';

describe('UpdateCompetitionScheduleHandler', () => {
  let handler: UpdateCompetitionScheduleHandler;
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
    handler = new UpdateCompetitionScheduleHandler(mockEventBus, mockEventStore as EventStoreDBClient);
  });

  it('should handle UpdateCompetitionScheduleCommand correctly', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function, func-names
    mockReadStream.mockImplementationOnce(async function* () {
      yield {
        event: {
          type: 'CompetitionScheduleCreatedEvent',
          data: JSON.stringify({
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
            start_at: new Date('2023-08-21T12:00:00Z'),
            end_at: new Date('2023-08-21T12:00:00Z'),
            state: 'DRAFT',
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

    // Mock for UpdateCompetitionScheduleInput
    const mockUpdateCompetitionScheduleInput: UpdateCompetitionScheduleInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      competition_id: 'd290f1ee-6c524-4b01-90e6-d701748f0852',
      start_at: new Date('2023-02-21T12:00:00Z'),
      end_at: new Date('2023-02-21T12:00:00Z'),
      state: CompetitionState.PUBLISHED,
    };

    const command = new UpdateCompetitionScheduleCommand(mockUpdateCompetitionScheduleInput, mockMetadata);

    await handler.execute(command);
    // Check the event bus was triggered with the expected events
    expect(mockEventBus.publishAll).toHaveBeenCalledWith([
      {
        type: 'CompetitionScheduleUpdatedEvent',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          competition_id: 'd290f1ee-6c524-4b01-90e6-d701748f0852',
          start_at: new Date('2023-02-21T12:00:00Z'),
          end_at: new Date('2023-02-21T12:00:00Z'),
          state: CompetitionState.PUBLISHED,
        },
        metadata: expect.objectContaining({
          created_at: expect.any(String),
          created_by: 'test-user-id',
        }),
      },
    ]);
  });
});
