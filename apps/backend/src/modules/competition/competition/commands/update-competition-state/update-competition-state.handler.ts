import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../../event-store/utils/create-command-handler.util';
import { decider } from '../../competition.decider';
import { CompetitionEvents } from '../../events';
import { UpdateCompetitionStateCommand } from './update-competition-state.command';

@CommandHandler(UpdateCompetitionStateCommand)
export class UpdateCompetitionStateHandler implements ICommandHandler<UpdateCompetitionStateCommand> {
  private readonly streamId = (command: UpdateCompetitionStateCommand) => `competition-${command.data.id}`;

  private readonly handle: (command: UpdateCompetitionStateCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: UpdateCompetitionStateCommand): Promise<any> {
    const { result, events }: CommandHandlerResult = await this.handle(command);

    if (result.success === true) {
      const nestEvents = events.map(({ type, data, metadata }) =>
        plainToInstance(CompetitionEvents[type], { type, data, metadata }),
      );

      this.eventBus.publishAll(nestEvents);
    }

    return command;
  }
}
