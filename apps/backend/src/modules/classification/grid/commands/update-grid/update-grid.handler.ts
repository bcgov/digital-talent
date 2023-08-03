import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../../event-store/utils/create-command-handler.util';
import { GridEvents } from '../../events';
import { decider } from '../../grid.decider';
import { UpdateGridCommand } from './update-grid.command';

@CommandHandler(UpdateGridCommand)
export class UpdateGridHandler implements ICommandHandler<UpdateGridCommand> {
  private readonly streamId = (command: UpdateGridCommand) => `grid-${command.data.id}`;

  private readonly handle: (command: UpdateGridCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: UpdateGridCommand): Promise<any> {
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
