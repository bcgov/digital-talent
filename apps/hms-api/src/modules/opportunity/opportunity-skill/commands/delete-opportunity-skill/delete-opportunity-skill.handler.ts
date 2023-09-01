import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../../event-store/utils/create-command-handler.util';
import { decider } from '../../opportunity-skill.decider';
import { Events } from '../../events';
import { DeleteOpportunitySkillCommand } from './delete-opportunity-skill.command';

@CommandHandler(DeleteOpportunitySkillCommand)
export class DeleteOpportunitySkillHandler implements ICommandHandler<DeleteOpportunitySkillCommand> {
  private readonly streamId = (command: DeleteOpportunitySkillCommand) =>
    `opportunity-skill-${command.data.opportunity_id}-${command.data.skill_id}`;

  private readonly handle: (command: DeleteOpportunitySkillCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: DeleteOpportunitySkillCommand): Promise<any> {
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
