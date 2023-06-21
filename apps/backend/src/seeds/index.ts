import { CommandBus, ICommand } from '@nestjs/cqrs';
import userSeeds from './user.seeds';

export const applySeeds = async (commandBus: CommandBus<ICommand>) => {
  for await (const seed of userSeeds) {
    await commandBus.execute(seed);
  }
};
