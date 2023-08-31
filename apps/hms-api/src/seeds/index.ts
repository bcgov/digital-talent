import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandBus, ICommand } from '@nestjs/cqrs';
import { applyClassificationSeeds } from './classification/classification.seeds';
import { applyGridSeeds } from './grid/grid.seeds';
import { applyJobDescriptionSeeds } from './job-description/job-description.seeds';
import { applyLocationSeeds } from './location/location.seeds';
import { applyMinistrySeeds } from './ministry/ministry.seeds';
import { applyOccupationGroupSeeds } from './occupation-group/occupation-group.seed';
import { applySkillSeeds } from './skill/skill.seeds';
import userSeeds from './user/user.seeds';

export const applySeeds = async (commandBus: CommandBus<ICommand>, eventStore: EventStoreDBClient) => {
  for await (const seed of userSeeds) {
    await commandBus.execute(seed);
  }

  await applyGridSeeds(commandBus, eventStore);
  await applyOccupationGroupSeeds(commandBus, eventStore);
  await applyClassificationSeeds(commandBus, eventStore);
  await applyJobDescriptionSeeds(commandBus, eventStore);
  await applyMinistrySeeds(commandBus, eventStore);
  await applySkillSeeds(commandBus, eventStore);
  await applyLocationSeeds(commandBus, eventStore);
};
