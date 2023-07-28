import { EventStoreDBClient, FORWARDS, START } from '@eventstore/db-client';
import { CommandBus, ICommand } from '@nestjs/cqrs';
import { SYSTEM_USER_ID } from '../../modules/auth/auth.constants';
import { CreatePositionCommand } from '../../modules/classification/commands/create-position/create-position.command';
import { DeletePositionCommand } from '../../modules/classification/commands/delete-position/delete-position.command';
import { UpdatePositionCommand } from '../../modules/classification/commands/update-position/update-position.command';
import { handleEmpty } from '../../modules/event-store/utils/create-command-handler.util';
import { validateObject } from '../../utils/validate-object.dto';
import { PositionSeed, seeds as positionSeeds } from './position.seeds';

const applyClassificationSeeds = async (commandBus: CommandBus<ICommand>, eventStore: EventStoreDBClient) => {
  const { upsert, remove } = positionSeeds;

  for await (const seed of upsert) {
    // Validate seed
    validateObject(seed, PositionSeed);

    // Check if the stream exists
    const events = handleEmpty(
      eventStore.readStream(`position-${seed.id}`, {
        direction: FORWARDS,
        fromRevision: START,
        maxCount: 1,
      }),
    );

    const { value } = await events.next();
    if (value == null) {
      // Stream doesn't exist -- create it
      const command = new CreatePositionCommand(seed, { created_by: SYSTEM_USER_ID });
      await commandBus.execute(command);
    } else {
      // Stream exists -- update it
      const command = new UpdatePositionCommand(seed, { created_by: SYSTEM_USER_ID });
      await commandBus.execute(command);
    }
  }

  for await (const seed of remove) {
    const command = new DeletePositionCommand(seed, { created_by: SYSTEM_USER_ID });
    await commandBus.execute(command);
  }
};

export default applyClassificationSeeds;
