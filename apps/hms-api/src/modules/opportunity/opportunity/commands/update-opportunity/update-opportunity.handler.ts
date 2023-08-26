import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../../event-store/utils/create-command-handler.util';
import { OpportunityEvents } from '../../events';
import { decider } from '../../opportunity.decider';
import { UpdateOpportunityCommand } from './update-opportunity.command';

@CommandHandler(UpdateOpportunityCommand)
export class UpdateOpportunityHandler implements ICommandHandler<UpdateOpportunityCommand> {
  private readonly streamId = (command: UpdateOpportunityCommand) => `opportunity-${command.data.id}`;

  private readonly handle: (command: UpdateOpportunityCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: UpdateOpportunityCommand): Promise<any> {
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
