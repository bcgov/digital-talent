import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../../event-store/utils/create-command-handler.util';
import { OpportunityEvents } from '../../events';
import { decider } from '../../opportunity.decider';
import { CreateOpportunityCommand } from './create-opportunity.command';

@CommandHandler(CreateOpportunityCommand)
export class CreateOpportunityHandler implements ICommandHandler<CreateOpportunityCommand> {
  private readonly streamId = (command: CreateOpportunityCommand) => `opportunity-${command.data.id}`;

  private readonly handle: (command: CreateOpportunityCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: CreateOpportunityCommand): Promise<any> {
    const { result, events }: CommandHandlerResult = await this.handle(command);

    if (result.success === true) {
      const nestEvents = events.map(({ type, data, metadata }) =>
        plainToInstance(OpportunityEvents[type], { type, data, metadata }),
      );

      this.eventBus.publishAll(nestEvents);
    }

    return command;
  }
}
