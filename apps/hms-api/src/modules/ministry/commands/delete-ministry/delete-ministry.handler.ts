import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../event-store/utils/create-command-handler.util';
import { MinistryEvents } from '../../events';
import { decider } from '../../ministry.decider';
import { DeleteMinistryCommand } from './delete-ministry.command';

@CommandHandler(DeleteMinistryCommand)
export class DeleteMinistryHandler implements ICommandHandler<DeleteMinistryCommand> {
  private readonly streamId = (command: DeleteMinistryCommand) => `ministry-${command.data.id}`;

  private readonly handle: (command: DeleteMinistryCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: DeleteMinistryCommand): Promise<any> {
    const { result, events }: CommandHandlerResult = await this.handle(command);

    if (result.success === true) {
      const nestEvents = events.map(({ type, data, metadata }) =>
        plainToInstance(MinistryEvents[type], { type, data, metadata }),
      );

      this.eventBus.publishAll(nestEvents);
    }

    return command;
  }
}
