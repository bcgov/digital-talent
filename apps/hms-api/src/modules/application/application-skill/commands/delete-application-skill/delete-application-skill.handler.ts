import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../../event-store/utils/create-command-handler.util';
import { decider } from '../../application-skill.decider';
import { Events } from '../../events';
import { DeleteApplicationSkillCommand } from './delete-application-skill.command';

@CommandHandler(DeleteApplicationSkillCommand)
export class DeleteApplicationSkillHandler implements ICommandHandler<DeleteApplicationSkillCommand> {
  private readonly streamId = (command: DeleteApplicationSkillCommand) =>
    `application-skill-${command.data.application_id}-${command.data.skill_id}`;

  private readonly handle: (command: DeleteApplicationSkillCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: DeleteApplicationSkillCommand): Promise<any> {
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
