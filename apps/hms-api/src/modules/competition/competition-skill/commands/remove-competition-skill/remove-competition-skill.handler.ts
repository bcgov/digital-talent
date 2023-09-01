import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../../event-store/utils/create-command-handler.util';
import { decider } from '../../competition-skill.decider';
import { CompetitionSkillEvents } from '../../events';
import { RemoveCompetitionSkillCommand } from './remove-competition-skill.command';

@CommandHandler(RemoveCompetitionSkillCommand)
export class RemoveCompetitionSkillHandler implements ICommandHandler<RemoveCompetitionSkillCommand> {
  private readonly streamId = (command: RemoveCompetitionSkillCommand) =>
    `competition-skill-${command.data.competition_id}-${command.data.skill_id}`;

  private readonly handle: (command: RemoveCompetitionSkillCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: RemoveCompetitionSkillCommand): Promise<any> {
    const { result, events }: CommandHandlerResult = await this.handle(command);

    if (result.success === true) {
      const nestEvents = events.map(({ type, data, metadata }) =>
        plainToInstance(CompetitionSkillEvents[type], { type, data, metadata }),
      );

      this.eventBus.publishAll(nestEvents);
    }

    return command;
  }
}
