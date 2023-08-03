import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../../event-store/utils/create-command-handler.util';
import { PositionEvents } from '../../events';
import { decider } from '../../position.decider';
import { CreatePositionCommand } from './create-position.command';

@CommandHandler(CreatePositionCommand)
export class CreatePositionHandler implements ICommandHandler<CreatePositionCommand> {
  private readonly streamId = (command: CreatePositionCommand) => `position-${command.data.id}`;

  private readonly handle: (command: CreatePositionCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: CreatePositionCommand): Promise<any> {
    const { result, events }: CommandHandlerResult = await this.handle(command);

    if (result.success === true) {
      const nestEvents = events.map(({ type, data, metadata }) =>
        plainToInstance(PositionEvents[type], { type, data, metadata }),
      );

      this.eventBus.publishAll(nestEvents);
    }

    return command;
  }
}
