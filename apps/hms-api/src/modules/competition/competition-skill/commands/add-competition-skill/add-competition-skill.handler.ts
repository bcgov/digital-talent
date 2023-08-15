import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../../event-store/utils/create-command-handler.util';
import { decider } from '../../competition-skill.decider';
import { CompetitionSkillEvents } from '../../events';
import { AddCompetitionSkillCommand } from './add-competition-skill.command';

@CommandHandler(AddCompetitionSkillCommand)
export class AddCompetitionSkillHandler implements ICommandHandler<AddCompetitionSkillCommand> {
  private readonly streamId = (command: AddCompetitionSkillCommand) =>
    `competition-skill-${command.data.competition_id}-${command.data.skill_id}`;

  private readonly handle: (command: AddCompetitionSkillCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: AddCompetitionSkillCommand): Promise<any> {
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
