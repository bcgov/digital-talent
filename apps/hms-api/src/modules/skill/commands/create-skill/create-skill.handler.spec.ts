import { EventStoreDBClient } from '@eventstore/db-client';
import { ModuleRef } from '@nestjs/core';
import { CommandBus, EventBus, IEvent, UnhandledExceptionBus } from '@nestjs/cqrs';
import { SkillCategory } from '../../../../@generated/prisma-nestjs-graphql';
import { Metadata } from '../../../event-store/types/metadata.type';
import { CreateSkillInput } from '../../inputs/create-skill.input';
import { CreateSkillCommand } from './create-skill.command';
import { CreateSkillHandler } from './create-skill.handler';

describe('CreateSkillHandler', () => {
  let handler: CreateSkillHandler;
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
    handler = new CreateSkillHandler(mockEventBus, mockEventStore as EventStoreDBClient);
  });

  it('should handle CreateSkillCommand correctly', async () => {
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

    // Mock for CreateSkillInput
    const mockCreateSkillInput: CreateSkillInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      category: SkillCategory.CLOUD_PLATFORMS,
      name: 'test_name',
      description: 'test_description',
    };

    const command = new CreateSkillCommand(mockCreateSkillInput, mockMetadata);

    await handler.execute(command);

    // Check the event bus was triggered with the expected events
    expect(mockEventBus.publishAll).toHaveBeenCalledWith([
      {
        type: 'SkillCreatedEvent',
        data: {
          id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          category: SkillCategory.CLOUD_PLATFORMS,
          name: 'test_name',
          description: 'test_description',
        },
        metadata: expect.objectContaining({
          created_at: expect.any(String), // Here, we just expect a string timestamp
          created_by: 'test-user-id',
        }),
      },
    ]);
  });
});
