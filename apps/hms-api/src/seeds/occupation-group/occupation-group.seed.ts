import { EventStoreDBClient, FORWARDS, START } from '@eventstore/db-client';
import { CommandBus, ICommand } from '@nestjs/cqrs';
import { SYSTEM_USER_ID } from '../../modules/auth/auth.constants';
import { handleEmpty } from '../../modules/event-store/utils/create-command-handler.util';
import { CreateOccupationGroupCommand } from '../../modules/occupation-group/commands/create-occupation-group/create-occupation-group.command';
import { DeleteOccupationGroupCommand } from '../../modules/occupation-group/commands/delete-occupation-group/delete-occupation-group.command';
import { UpdateOccupationGroupCommand } from '../../modules/occupation-group/commands/update-occupation-group/update-occupation-group.command';
import { CreateOccupationGroupInput } from '../../modules/occupation-group/inputs/create-occupation-group.input';
import { validateObject } from '../../utils/validate-object.dto';
import { SeedType } from '../seeds.type';

export const occupationGroupSeeds: SeedType<CreateOccupationGroupInput> = {
  upsert: [
    { id: '6ff04898-6a78-41af-b47b-ae30e39e4be9', code: 'AO', name: 'Administrative Officer' },
    { id: 'dc56bc3a-32c6-48ae-9771-81344329640b', code: 'BAND', name: 'Band' },
    { id: 'a54de04d-620a-40e3-b57a-a28aab04566d', code: 'IS', name: 'Information Systems' },
  ],
  remove: [],
};

export const applyOccupationGroupSeeds = async (commandBus: CommandBus<ICommand>, eventStore: EventStoreDBClient) => {
  const { upsert, remove } = occupationGroupSeeds;

  for await (const seed of upsert) {
    validateObject(seed, CreateOccupationGroupInput);

    // Check if the stream exists
    const events = handleEmpty(
      eventStore.readStream(`occupation-group-${seed.id}`, {
        direction: FORWARDS,
        fromRevision: START,
        maxCount: 1,
      }),
    );

    const { value } = await events.next();
    if (value == null) {
      // Stream doesn't exist -- create its
      const command = new CreateOccupationGroupCommand(seed, { created_by: SYSTEM_USER_ID });
      await commandBus.execute(command);
    } else {
      // Stream exists -- update it
      const command = new UpdateOccupationGroupCommand(seed, { created_by: SYSTEM_USER_ID });
      await commandBus.execute(command);
    }
  }

  for await (const seed of remove) {
    const command = new DeleteOccupationGroupCommand(seed, { created_by: SYSTEM_USER_ID });
    await commandBus.execute(command);
  }
};
