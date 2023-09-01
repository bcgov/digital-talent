import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../event-store/utils/create-command-handler.util';
import { OccupationGroupEvents } from '../../events';
import { decider } from '../../occupation-group.decider';
import { CreateOccupationGroupCommand } from './create-occupation-group.command';

@CommandHandler(CreateOccupationGroupCommand)
export class CreateOccupationGroupHandler implements ICommandHandler<CreateOccupationGroupCommand> {
  private readonly streamId = (command: CreateOccupationGroupCommand) => `occupation-group-${command.data.id}`;

  private readonly handle: (command: CreateOccupationGroupCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: CreateOccupationGroupCommand): Promise<any> {
    const { result, events }: CommandHandlerResult = await this.handle(command);

    if (result.success === true) {
      const nestEvents = events.map(({ type, data, metadata }) =>
        plainToInstance(OccupationGroupEvents[type], { type, data, metadata }),
      );

      this.eventBus.publishAll(nestEvents);
    }

    return command;
  }
}
