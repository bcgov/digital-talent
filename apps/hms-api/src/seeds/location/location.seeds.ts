import { EventStoreDBClient, FORWARDS, START } from '@eventstore/db-client';
import { CommandBus, ICommand } from '@nestjs/cqrs';
import { SYSTEM_USER_ID } from '../../modules/auth/auth.constants';
import { handleEmpty } from '../../modules/event-store/utils/create-command-handler.util';
import { CreateLocationCommand } from '../../modules/location/commands/create-location/create-location.command';
import { DeleteLocationCommand } from '../../modules/location/commands/delete-location/delete-location.command';
import { UpdateLocationCommand } from '../../modules/location/commands/update-location/update-location.command';
import { CreateLocationInput } from '../../modules/location/inputs/create-location.input';
import { validateObject } from '../../utils/validate-object.dto';
import { SeedType } from '../seeds.type';

export const locationSeeds: SeedType<CreateLocationInput> = {
  upsert: [
    {
      id: 'a583cf18-885f-4b7a-b3f0-d755063f28da',
      deltek_id: '101',
      name: 'Victoria',
      postal_code: 'V1G1X1',
      lat: 90,
      lon: 90,
    },
    {
      id: 'b204a31c-caa4-42a2-bde9-0e683e39203a',
      deltek_id: '87',
      name: 'Vancouver',
      postal_code: 'V1G1X1',
      lat: 90,
      lon: 90,
    },
    {
      id: '5cb811fa-8154-416f-b255-11cf884a3b8a',
      deltek_id: '113',
      name: 'Nanaimo',
      postal_code: 'V1G1X1',
      lat: 90,
      lon: 90,
    },
  ],
  remove: [],
};

export const applyLocationSeeds = async (commandBus: CommandBus<ICommand>, eventStore: EventStoreDBClient) => {
  const { upsert, remove } = locationSeeds;

  for await (const seed of upsert) {
    validateObject(seed, CreateLocationInput);

    // Check if the stream exists
    const events = handleEmpty(
      eventStore.readStream(`location-${seed.id}`, {
        direction: FORWARDS,
        fromRevision: START,
        maxCount: 1,
      }),
    );

    const { value } = await events.next();
    if (value == null) {
      // Stream doesn't exist -- create it
      const command = new CreateLocationCommand(seed, { created_by: SYSTEM_USER_ID });
      await commandBus.execute(command);
    } else {
      // Stream exists -- update it
      const command = new UpdateLocationCommand(seed, { created_by: SYSTEM_USER_ID });
      await commandBus.execute(command);
    }
  }

  for await (const seed of remove) {
    const command = new DeleteLocationCommand(seed, { created_by: SYSTEM_USER_ID });
    await commandBus.execute(command);
  }
};
