import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../../event-store/utils/create-command-handler.util';
import { decider } from '../../classification.decider';
import { ClassificationEvents } from '../../events';
import { CreateClassificationCommand } from './create-classification.command';

@CommandHandler(CreateClassificationCommand)
export class CreateClassificationHandler implements ICommandHandler<CreateClassificationCommand> {
  private readonly streamId = (command: CreateClassificationCommand) => `classification-${command.data.id}`;

  private readonly handle: (command: CreateClassificationCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: CreateClassificationCommand): Promise<any> {
    const { result, events }: CommandHandlerResult = await this.handle(command);

    if (result.success === true) {
      const nestEvents = events.map(({ type, data, metadata }) =>
        plainToInstance(ClassificationEvents[type], { type, data, metadata }),
      );

      this.eventBus.publishAll(nestEvents);
    }

    return command;
  }
}
