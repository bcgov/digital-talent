import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../../event-store/utils/create-command-handler.util';
import { decider } from '../../elist-offer.decider';
import { Events } from '../../events';
import { CreateElistOfferCommand } from './create-elist-offer.command';

@CommandHandler(CreateElistOfferCommand)
export class CreateElistOfferHandler implements ICommandHandler<CreateElistOfferCommand> {
  private readonly streamId = (command: CreateElistOfferCommand) => `elist-offer-${command.data.id}`;

  private readonly handle: (command: CreateElistOfferCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: CreateElistOfferCommand): Promise<any> {
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
