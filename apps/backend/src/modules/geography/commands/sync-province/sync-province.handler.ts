import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { CommandHandlerResult } from '../../../event-store/types/command-handler-result.type';
import { createCommandHandler } from '../../../event-store/utils/create-command-handler.util';
import { Events } from '../../events';
import { decider } from '../../geography.decider';
import { SyncProvinceCommand } from './sync-province.command';

@CommandHandler(SyncProvinceCommand)
export class SyncProvinceHandler implements ICommandHandler<SyncProvinceCommand> {
  private readonly streamId = (command: SyncProvinceCommand) => `province-${command.data.id}`;

  private readonly handle: (command: SyncProvinceCommand) => Promise<CommandHandlerResult>;

  constructor(private readonly eventBus: EventBus, private readonly eventStore: EventStoreDBClient) {
    this.handle = createCommandHandler(eventStore, this.streamId, decider);
  }

  async execute(command: SyncProvinceCommand): Promise<any> {
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
