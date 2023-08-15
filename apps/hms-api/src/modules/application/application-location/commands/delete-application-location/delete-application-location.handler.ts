import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../../event-store/utils/create-command-handler.util';
import { decider } from '../../application-location.decider';
import { Events } from '../../events';
import { DeleteApplicationLocationCommand } from './delete-application-location.command';

@CommandHandler(DeleteApplicationLocationCommand)
export class DeleteApplicationLocationHandler implements ICommandHandler<DeleteApplicationLocationCommand> {
  private readonly streamId = (command: DeleteApplicationLocationCommand) =>
    `application-location-${command.data.application_id}-${command.data.location_id}`;

  private readonly handle: (command: DeleteApplicationLocationCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: DeleteApplicationLocationCommand): Promise<any> {
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
