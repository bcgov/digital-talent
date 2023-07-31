import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandBus, ICommand } from '@nestjs/cqrs';
import applyClassificationSeeds from './classification';
import userSeeds from './user/user.seeds';

export const applySeeds = async (commandBus: CommandBus<ICommand>, eventStore: EventStoreDBClient) => {
  for await (const seed of userSeeds) {
    await commandBus.execute(seed);
  }

  await applyClassificationSeeds(commandBus, eventStore);
};
