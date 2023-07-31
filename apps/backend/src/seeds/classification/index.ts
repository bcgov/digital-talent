import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandBus, ICommand } from '@nestjs/cqrs';
import { applyGridSeeds } from './grid.seeds';
import { applyPositionSeeds } from './position.seeds';

const applyClassificationSeeds = async (commandBus: CommandBus<ICommand>, eventStore: EventStoreDBClient) => {
  await applyGridSeeds(commandBus, eventStore);
  await applyPositionSeeds(commandBus, eventStore);
};

export default applyClassificationSeeds;
