import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../event-store/utils/create-command-handler.util';
import { decider } from '../../application.decider';
import { Events } from '../../events';
import { CreateApplicationCommand } from './create-application.command';

@CommandHandler(CreateApplicationCommand)
export class CreateApplicationHandler implements ICommandHandler<CreateApplicationCommand> {
  private readonly streamId = (command: CreateApplicationCommand) => `application-${command.data.id}`;

  private readonly handle: (command: CreateApplicationCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    // console.log('createApplication command constructor');
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: CreateApplicationCommand): Promise<any> {
    const { result, events }: CommandHandlerResult = await this.handle(command);

    if (result.success === true) {
      const nestEvents = events.map(({ type, data, metadata }) =>
        plainToInstance(Events[type], { type, data, metadata }),
      );

      this.eventBus.publishAll(nestEvents);
    }

    return command;
  }
}