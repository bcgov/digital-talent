import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandBus, ICommand, QueryBus } from '@nestjs/cqrs';
import { GetUsersQuery } from '../modules/user/queries/get-users/get-users.query';
import { applyClassificationSeeds } from './classification/classification.seeds';
import { applyGridSeeds } from './grid/grid.seeds';
import { applyJobDescriptionSeeds } from './job-description/job-description.seeds';
import { applyLocationSeeds } from './location/location.seeds';
import { applyMinistrySeeds } from './ministry/ministry.seeds';
import { applyOccupationGroupSeeds } from './occupation-group/occupation-group.seed';
import { applySkillSeeds } from './skill/skill.seeds';
import userSeeds from './user/user.seeds';

export const applySeeds = async (commandBus: CommandBus<ICommand>, eventStore: EventStoreDBClient) => {
  // eslint-disable-next-line no-console
  console.log('applying seeds..');
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

export const seedsExist = async (queryBus: QueryBus) => {
  // check if seeds already exist by checking if there is any data in the user table
  const users = await queryBus.execute(new GetUsersQuery());
  return users.length !== 0;
};
