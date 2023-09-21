import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandBus, ICommand } from '@nestjs/cqrs';
import { CreateClassificationCommand } from '../../modules/classification/commands/create-classification/create-classification.command';
import { DeleteClassificationCommand } from '../../modules/classification/commands/delete-classification/delete-classification.command';
import { UpdateClassificationCommand } from '../../modules/classification/commands/update-classification/update-classification.command';
import { CreateClassificationInput } from '../../modules/classification/inputs/create-classification.input';
import { SeedType } from '../seeds.type';
import { applySeeds } from '../util/util';

export const classificationSeeds: SeedType<CreateClassificationInput> = {
  upsert: [
    // BAND 3
    {
      id: '6c19f536-b8ab-4e2c-9e94-f20cd550a7ba',
      grid_id: 'dcca8de3-bc01-4e24-84b0-3e89be512c1a',
      occupation_group_id: 'dc56bc3a-32c6-48ae-9771-81344329640b',
      rate_adjustment: 0,
    },
    // AO 24, 27
    {
      id: '2e1b710b-b04f-4430-a045-9afd89d01593',
      grid_id: '6dd3345c-00b1-410e-b584-11315af2b3db',
      occupation_group_id: '6ff04898-6a78-41af-b47b-ae30e39e4be9',
      rate_adjustment: 0,
    },
    {
      id: '74b07121-e910-473f-b0d7-2fbf292c7a1d',
      grid_id: '6410100c-2c34-4f0e-baad-ed9de5299dd8',
      occupation_group_id: '6ff04898-6a78-41af-b47b-ae30e39e4be9',
      rate_adjustment: 0,
    },
    // IS 18, 21, 24, 27, 30
    {
      id: '7e2a2c26-7a77-4dbe-8d9c-eafa37ebbeb7',
      grid_id: '7a22c548-26a9-4bf3-96d1-b8b0bda28eab',
      occupation_group_id: 'a54de04d-620a-40e3-b57a-a28aab04566d',
      rate_adjustment: 0,
    },
    {
      id: 'a07800b6-db39-4bc1-94f6-996c7d05e938',
      grid_id: '97203bf7-46f4-4b8d-9cd9-a0a0b8bb9560',
      occupation_group_id: 'a54de04d-620a-40e3-b57a-a28aab04566d',
      rate_adjustment: 0,
    },
    {
      id: '8c771981-8e49-401d-887d-542dcc64451c',
      grid_id: '6dd3345c-00b1-410e-b584-11315af2b3db',
      occupation_group_id: 'a54de04d-620a-40e3-b57a-a28aab04566d',
      rate_adjustment: 0.066,
    },
    {
      id: '343fb017-e759-4e43-9438-6c0576600a7a',
      grid_id: '6410100c-2c34-4f0e-baad-ed9de5299dd8',
      occupation_group_id: 'a54de04d-620a-40e3-b57a-a28aab04566d',
      rate_adjustment: 0.099,
    },
    {
      id: '28bf5d98-d737-485c-b1bd-00a84900e8fe',
      grid_id: '851f9d71-fc20-4055-becd-41ecf50d6750',
      occupation_group_id: 'a54de04d-620a-40e3-b57a-a28aab04566d',
      rate_adjustment: 0.099,
    },
  ],
  remove: [],
};

export const applyClassificationSeeds = async (commandBus: CommandBus<ICommand>, eventStore: EventStoreDBClient) => {
  await applySeeds(
    classificationSeeds,
    commandBus,
    eventStore,
    CreateClassificationInput,
    CreateClassificationCommand,
    UpdateClassificationCommand,
    DeleteClassificationCommand,
    'classification',
  );
};
