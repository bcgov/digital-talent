import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../event-store/utils/create-command-handler.util';
import { SkillEvents } from '../../events';
import { decider } from '../../skill.decider';
import { CreateSkillCommand } from './create-skill.command';

@CommandHandler(CreateSkillCommand)
export class CreateSkillHandler implements ICommandHandler<CreateSkillCommand> {
  private readonly streamId = (command: CreateSkillCommand) => `skill-${command.data.id}`;

  private readonly handle: (command: CreateSkillCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: CreateSkillCommand): Promise<any> {
    const { result, events }: CommandHandlerResult = await this.handle(command);

    if (result.success === true) {
      const nestEvents = events.map(({ type, data, metadata }) =>
        plainToInstance(SkillEvents[type], { type, data, metadata }),
      );

      this.eventBus.publishAll(nestEvents);
    }

    return command;
  }
}
