import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../event-store/utils/create-command-handler.util';
import { JobDescriptionEvents } from '../../events';
import { decider } from '../../job-description.decider';
import { CreateJobDescriptionCommand } from './create-job-description.command';

@CommandHandler(CreateJobDescriptionCommand)
export class CreateJobDescriptionHandler implements ICommandHandler<CreateJobDescriptionCommand> {
  private readonly streamId = (command: CreateJobDescriptionCommand) => `job-description-${command.data.id}`;

  private readonly handle: (command: CreateJobDescriptionCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: CreateJobDescriptionCommand): Promise<any> {
    const { result, events }: CommandHandlerResult = await this.handle(command);

    if (result.success === true) {
      const nestEvents = events.map(({ type, data, metadata }) =>
        plainToInstance(JobDescriptionEvents[type], { type, data, metadata }),
      );

      this.eventBus.publishAll(nestEvents);
    }

    return command;
  }
}
