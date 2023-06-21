import { CommandBus, ICommand } from '@nestjs/cqrs';
import classificationSeeds from './classification.seeds';
import userSeeds from './user.seeds';

export const applySeeds = async (commandBus: CommandBus<ICommand>) => {
  for await (const seed of userSeeds) {
    await commandBus.execute(seed);
  }

  for await (const seed of classificationSeeds) {
    await commandBus.execute(seed);
  }
};
