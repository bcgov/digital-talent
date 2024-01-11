import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandBus, ICommand } from '@nestjs/cqrs';
import { CreateOccupationGroupCommand } from '../../modules/occupation-group/commands/create-occupation-group/create-occupation-group.command';
import { DeleteOccupationGroupCommand } from '../../modules/occupation-group/commands/delete-occupation-group/delete-occupation-group.command';
import { UpdateOccupationGroupCommand } from '../../modules/occupation-group/commands/update-occupation-group/update-occupation-group.command';
import { CreateOccupationGroupInput } from '../../modules/occupation-group/inputs/create-occupation-group.input';
import { SeedType } from '../seeds.type';
import { applySeeds } from '../util/util';

export const occupationGroupSeeds: SeedType<CreateOccupationGroupInput> = {
  upsert: [
    { id: '6ff04898-6a78-41af-b47b-ae30e39e4be9', code: 'AO', name: 'Administrative Officer' },
    { id: 'dc56bc3a-32c6-48ae-9771-81344329640b', code: 'BAND', name: 'Band' },
    { id: 'a54de04d-620a-40e3-b57a-a28aab04566d', code: 'IS', name: 'Information Systems' },
  ],
  remove: [],
};

export const applyOccupationGroupSeeds = async (commandBus: CommandBus<ICommand>, eventStore: EventStoreDBClient) => {
  await applySeeds(
    occupationGroupSeeds,
    commandBus,
    eventStore,
    CreateOccupationGroupInput,
    CreateOccupationGroupCommand,
    UpdateOccupationGroupCommand,
    DeleteOccupationGroupCommand,
    'occupation-group',
  );
};
