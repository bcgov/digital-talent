import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../event-store/utils/create-command-handler.util';
import { decider } from '../../competition-schedule.decider';
import { Events } from '../../events';
import { UpdateCompetitionScheduleCommand } from './update-competition-schedule.command';

@CommandHandler(UpdateCompetitionScheduleCommand)
export class UpdateCompetitionScheduleHandler implements ICommandHandler<UpdateCompetitionScheduleCommand> {
  private readonly streamId = (command: UpdateCompetitionScheduleCommand) => `competition-schedule-${command.data.id}`;

  private readonly handle: (command: UpdateCompetitionScheduleCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: UpdateCompetitionScheduleCommand): Promise<any> {
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
