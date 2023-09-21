import { EventStoreDBClient, FORWARDS, START } from '@eventstore/db-client';
import { CommandBus, ICommand } from '@nestjs/cqrs';
import { SYSTEM_USER_ID } from '../../modules/auth/auth.constants';
import { handleEmpty } from '../../modules/event-store/utils/create-command-handler.util';
import * as defaultValidator from '../../utils/validate-object.dto';

export async function applySeeds<T extends { id: string | number }>(
  seeds: { upsert: T[]; remove: T[] },
  commandBus: CommandBus<ICommand>,
  eventStore: EventStoreDBClient,
  validateInput: any,
  CreateCommand: any,
  UpdateCommand: any,
  DeleteCommand: any,
  streamPrefix: string,
  validateObject: typeof defaultValidator.validateObject = defaultValidator.validateObject,
) {
  // eslint-disable-next-line no-console
  console.log('applying seeds for: ', streamPrefix);
  const { upsert, remove } = seeds;

  for await (const seed of upsert) {
    validateObject(seed, validateInput);

    // Check if the stream exists
    const events = handleEmpty(
      eventStore.readStream(`${streamPrefix}-${seed.id}`, {
        direction: FORWARDS,
        fromRevision: START,
        maxCount: 1,
      }),
    );

    const { value } = await events.next();
    if (value == null) {
      // Stream doesn't exist -- create it
      const command = new CreateCommand(seed, { created_by: SYSTEM_USER_ID });
      await commandBus.execute(command);
    } else {
      // Stream exists -- update it
      const command = new UpdateCommand(seed, { created_by: SYSTEM_USER_ID });
      await commandBus.execute(command);
    }
  }

  for await (const seed of remove) {
    const command = new DeleteCommand(seed, { created_by: SYSTEM_USER_ID });
    await commandBus.execute(command);
  }
}
