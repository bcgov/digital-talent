/* eslint-disable max-classes-per-file */
import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandBus, ICommand } from '@nestjs/cqrs';
import { CreateGridCommand } from '../../modules/grid/commands/create-grid/create-grid.command';
import { DeleteGridCommand } from '../../modules/grid/commands/delete-grid/delete-grid.command';
import { UpdateGridCommand } from '../../modules/grid/commands/update-grid/update-grid.command';
import { CreateGridInput } from '../../modules/grid/inputs/create-grid.input';
import { SeedType } from '../seeds.type';
import { applySeeds } from '../util/util';

export const gridSeeds: SeedType<CreateGridInput> = {
  upsert: [
    {
      id: '7a22c548-26a9-4bf3-96d1-b8b0bda28eab',
      name: '18',
      steps: [
        {
          name: 1,
          rate_per_year: 62255.85,
          rate_per_month: 5187.99,
          rate_per_fortnight: 2386.26,
          rate_per_hour: 34.0894,
        },
        {
          name: 2,
          rate_per_year: 64021.32,
          rate_per_month: 5335.11,
          rate_per_fortnight: 2453.93,
          rate_per_hour: 35.0561,
        },
        {
          name: 3,
          rate_per_year: 65844.7,
          rate_per_month: 5487.06,
          rate_per_fortnight: 2523.82,
          rate_per_hour: 36.0546,
        },
        {
          name: 4,
          rate_per_year: 67728.87,
          rate_per_month: 5644.07,
          rate_per_fortnight: 2596.04,
          rate_per_hour: 37.0863,
        },
        {
          name: 5,
          rate_per_year: 70557.73,
          rate_per_month: 5879.81,
          rate_per_fortnight: 2704.47,
          rate_per_hour: 38.6353,
        },
      ],
    },
    {
      id: '97203bf7-46f4-4b8d-9cd9-a0a0b8bb9560',
      name: '21',
      steps: [
        {
          name: 1,
          rate_per_year: 67728.87,
          rate_per_month: 5644.07,
          rate_per_fortnight: 2596.04,
          rate_per_hour: 37.0863,
        },
        {
          name: 2,
          rate_per_year: 69681.13,
          rate_per_month: 5806.76,
          rate_per_fortnight: 2670.87,
          rate_per_hour: 38.1553,
        },
        {
          name: 3,
          rate_per_year: 71734.62,
          rate_per_month: 5977.89,
          rate_per_fortnight: 2749.58,
          rate_per_hour: 39.2797,
        },
        {
          name: 4,
          rate_per_year: 73855.42,
          rate_per_month: 6154.62,
          rate_per_fortnight: 2830.87,
          rate_per_hour: 40.441,
        },
        {
          name: 5,
          rate_per_year: 77012.22,
          rate_per_month: 6417.69,
          rate_per_fortnight: 2951.87,
          rate_per_hour: 42.1696,
        },
      ],
    },
    {
      id: '6dd3345c-00b1-410e-b584-11315af2b3db',
      name: '24',
      steps: [
        {
          name: 1,
          rate_per_year: 73855.42,
          rate_per_month: 6154.62,
          rate_per_fortnight: 2830.87,
          rate_per_hour: 40.441,
        },
        {
          name: 2,
          rate_per_year: 76047.18,
          rate_per_month: 6337.27,
          rate_per_fortnight: 2914.88,
          rate_per_hour: 41.6411,
        },
        {
          name: 3,
          rate_per_year: 78312.25,
          rate_per_month: 6526.02,
          rate_per_fortnight: 3001.7,
          rate_per_hour: 42.8814,
        },
        {
          name: 4,
          rate_per_year: 80652.2,
          rate_per_month: 6721.02,
          rate_per_fortnight: 3091.39,
          rate_per_hour: 44.1627,
        },
        {
          name: 5,
          rate_per_year: 84134.34,
          rate_per_month: 7011.2,
          rate_per_fortnight: 3224.86,
          rate_per_hour: 46.0694,
        },
      ],
    },
    {
      id: '6410100c-2c34-4f0e-baad-ed9de5299dd8',
      name: '27',
      steps: [
        {
          name: 1,
          rate_per_year: 80652.2,
          rate_per_month: 6721.02,
          rate_per_fortnight: 3091.39,
          rate_per_hour: 44.1627,
        },
        {
          name: 2,
          rate_per_year: 83071.2,
          rate_per_month: 6922.6,
          rate_per_fortnight: 3184.11,
          rate_per_hour: 45.4873,
        },
        {
          name: 3,
          rate_per_year: 85570.82,
          rate_per_month: 7130.9,
          rate_per_fortnight: 3279.92,
          rate_per_hour: 46.856,
        },
        {
          name: 4,
          rate_per_year: 88152.35,
          rate_per_month: 7346.03,
          rate_per_fortnight: 3378.87,
          rate_per_hour: 48.2696,
        },
        {
          name: 5,
          rate_per_year: 91992.7,
          rate_per_month: 7666.06,
          rate_per_fortnight: 3526.07,
          rate_per_hour: 50.3724,
        },
      ],
    },
    {
      id: '851f9d71-fc20-4055-becd-41ecf50d6750',
      name: '30',
      steps: [
        {
          name: 1,
          rate_per_year: 88152.35,
          rate_per_month: 7346.03,
          rate_per_fortnight: 3378.87,
          rate_per_hour: 48.2696,
        },
        {
          name: 2,
          rate_per_year: 90820.51,
          rate_per_month: 7568.38,
          rate_per_fortnight: 3481.14,
          rate_per_hour: 49.7306,
        },
        {
          name: 3,
          rate_per_year: 93578.67,
          rate_per_month: 7798.22,
          rate_per_fortnight: 3586.86,
          rate_per_hour: 51.2409,
        },
        {
          name: 4,
          rate_per_year: 96493.62,
          rate_per_month: 8041.14,
          rate_per_fortnight: 3698.59,
          rate_per_hour: 52.837,
        },
        {
          name: 5,
          rate_per_year: 100665.3,
          rate_per_month: 8388.78,
          rate_per_fortnight: 3858.49,
          rate_per_hour: 55.1213,
        },
      ],
    },
    {
      id: 'dcca8de3-bc01-4e24-84b0-3e89be512c1a',
      name: '3',
      steps: [
        {
          name: 0,
          rate_per_year: 86200.0,
          rate_per_month: 7183.33,
          rate_per_fortnight: 3304.03,
          rate_per_hour: 47.2004,
        },
        {
          name: 1,
          rate_per_year: 122100.01,
          rate_per_month: 10175.0,
          rate_per_fortnight: 4680.08,
          rate_per_hour: 66.8582,
        },
      ],
    },
  ],
  remove: [],
};

export const applyGridSeeds = async (commandBus: CommandBus<ICommand>, eventStore: EventStoreDBClient) => {
  await applySeeds(
    gridSeeds,
    commandBus,
    eventStore,
    CreateGridInput,
    CreateGridCommand,
    UpdateGridCommand,
    DeleteGridCommand,
    'grid',
  );
};
