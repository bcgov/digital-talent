import { EventStoreDBClient, FORWARDS, START } from '@eventstore/db-client';
import { CommandBus, ICommand } from '@nestjs/cqrs';
import { PositionCategory } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { SYSTEM_USER_ID } from '../../modules/auth/auth.constants';
import { CreatePositionCommand } from '../../modules/classification/position/commands/create-position/create-position.command';
import { DeletePositionCommand } from '../../modules/classification/position/commands/delete-position/delete-position.command';
import { UpdatePositionCommand } from '../../modules/classification/position/commands/update-position/update-position.command';
import { handleEmpty } from '../../modules/event-store/utils/create-command-handler.util';
import { validateObject } from '../../utils/validate-object.dto';
import { SeedType } from '../seeds.type';

export class PositionSeed {
  @IsUUID()
  id: string;

  @IsEnum(PositionCategory)
  category: PositionCategory;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;
}

export const positionSeeds: SeedType<PositionSeed> = {
  upsert: [
    { id: 'fa931d17-41cb-4967-b9aa-ada43391674c', name: 'Dev Ops Specialist', category: 'IS' },
    {
      id: '8b98f19d-85df-40f2-819b-bdf8eae68813',
      name: 'Full Stack Developer',
      category: 'IS',
    },
    { id: '8212a5b1-5efb-4e45-a48c-070043f83121', name: 'Product Manager', category: 'BAND' },
    { id: '69982e41-3557-4c86-bfed-ff2f09574823', name: 'Product Manager', category: 'IS' },
    { id: '92588e9b-4722-4579-af4a-c98311ae182b', name: 'Scrum Master', category: 'IS' },
    { id: 'd1de1a6b-5277-4ae1-978c-0ad28ebf72da', name: 'Site Reliability Specialist', category: 'IS' },
    { id: '458e6de8-b90a-4983-977f-580001c2d96a', name: 'User Experience Designer', category: 'IS' },
    { id: '5078204f-03c7-4d9d-a144-8c646aeda40b', name: 'User Experience Researcher', category: 'AO' },
  ],
  remove: [],
};

export const applyPositionSeeds = async (commandBus: CommandBus<ICommand>, eventStore: EventStoreDBClient) => {
  const { upsert, remove } = positionSeeds;

  for await (const seed of upsert) {
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
