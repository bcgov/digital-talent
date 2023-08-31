import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../event-store/utils/create-command-handler.util';
import { decider } from '../../classification.decider';
import { ClassificationEvents } from '../../events';
import { UpdateClassificationCommand } from './update-classification.command';

@CommandHandler(UpdateClassificationCommand)
export class UpdateClassificationHandler implements ICommandHandler<UpdateClassificationCommand> {
  private readonly streamId = (command: UpdateClassificationCommand) => `classification-${command.data.id}`;

  private readonly handle: (command: UpdateClassificationCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: UpdateClassificationCommand): Promise<any> {
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
