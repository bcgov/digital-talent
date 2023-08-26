import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../event-store/utils/create-command-handler.util';
import { IdentityEvents } from '../../events';
import { decider } from '../../identity.decider';
import { DeleteIdentityCommand } from './delete-identity.command';

@CommandHandler(DeleteIdentityCommand)
export class DeleteIdentityHandler implements ICommandHandler<DeleteIdentityCommand> {
  private readonly streamId = (command: DeleteIdentityCommand) =>
    `identity-${command.data.sub}-${command.data.identity_provider}`;

  private readonly handle: (command: DeleteIdentityCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: DeleteIdentityCommand): Promise<any> {
    const { result, events }: CommandHandlerResult = await this.handle(command);

    if (result.success === true) {
      const nestEvents = events.map(({ type, data, metadata }) =>
        plainToInstance(IdentityEvents[type], { type, data, metadata }),
      );

      this.eventBus.publishAll(nestEvents);
    }

    return command;
  }
}
