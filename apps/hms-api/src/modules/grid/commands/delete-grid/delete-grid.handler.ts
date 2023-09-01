import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../event-store/utils/create-command-handler.util';
import { GridEvents } from '../../events';
import { decider } from '../../grid.decider';
import { DeleteGridCommand } from './delete-grid.command';

@CommandHandler(DeleteGridCommand)
export class DeleteGridHandler implements ICommandHandler<DeleteGridCommand> {
  private readonly streamId = (command: DeleteGridCommand) => `grid-${command.data.id}`;

  private readonly handle: (command: DeleteGridCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: DeleteGridCommand): Promise<any> {
    const { result, events }: CommandHandlerResult = await this.handle(command);

    if (result.success === true) {
      const nestEvents = events.map(({ type, data, metadata }) =>
        plainToInstance(GridEvents[type], { type, data, metadata }),
      );

      this.eventBus.publishAll(nestEvents);
    }

    return command;
  }
}
