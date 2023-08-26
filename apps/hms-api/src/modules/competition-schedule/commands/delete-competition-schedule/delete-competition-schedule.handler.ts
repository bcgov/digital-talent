import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../event-store/utils/create-command-handler.util';
import { decider } from '../../competition-schedule.decider';
import { Events } from '../../events';
import { DeleteCompetitionScheduleCommand } from './delete-competition-schedule.command';

@CommandHandler(DeleteCompetitionScheduleCommand)
export class DeleteCompetitionScheduleHandler implements ICommandHandler<DeleteCompetitionScheduleCommand> {
  private readonly streamId = (command: DeleteCompetitionScheduleCommand) => `competition-schedule-${command.data.id}`;

  private readonly handle: (command: DeleteCompetitionScheduleCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: DeleteCompetitionScheduleCommand): Promise<any> {
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
