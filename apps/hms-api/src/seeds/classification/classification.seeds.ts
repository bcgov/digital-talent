import { EventStoreDBClient, FORWARDS, START } from '@eventstore/db-client';
import { CommandBus, ICommand } from '@nestjs/cqrs';
import { IsNumber, IsUUID, Max, Min } from 'class-validator';
import { SYSTEM_USER_ID } from '../../modules/auth/auth.constants';
import { CreateClassificationCommand } from '../../modules/classification/classification/commands/create-classification/create-classification.command';
import { DeleteClassificationCommand } from '../../modules/classification/classification/commands/delete-classification/delete-classification.command';
import { UpdateClassificationCommand } from '../../modules/classification/classification/commands/update-classification/update-classification.command';
import { handleEmpty } from '../../modules/event-store/utils/create-command-handler.util';
import { validateObject } from '../../utils/validate-object.dto';
import { SeedType } from '../seeds.type';

export class ClassificationSeed {
  @IsUUID()
  id: string;

  @IsUUID()
  grid_id: string;

  @IsUUID()
  position_id: string;

  @Min(0)
  @Max(1)
  @IsNumber({ maxDecimalPlaces: 3 })
  rate_adjustment: number;
}

export const classificationSeeds: SeedType<ClassificationSeed> = {
  upsert: [
    // Full Stack Developer 18, 21, 24, 27, 30
    {
      id: 'f72b571f-ffa5-4bb8-86b2-9bfa4edc80b6',
      grid_id: '7a22c548-26a9-4bf3-96d1-b8b0bda28eab',
      position_id: '8b98f19d-85df-40f2-819b-bdf8eae68813',
      rate_adjustment: 0,
    },
    {
      id: '308840a4-0ef4-4bc4-8bcf-ed3d4f5239e0',
      grid_id: '97203bf7-46f4-4b8d-9cd9-a0a0b8bb9560',
      position_id: '8b98f19d-85df-40f2-819b-bdf8eae68813',
      rate_adjustment: 0,
    },
    {
      id: '8b140e95-5969-4a5a-bc1c-86469ab064e1',
      grid_id: '6dd3345c-00b1-410e-b584-11315af2b3db',
      position_id: '8b98f19d-85df-40f2-819b-bdf8eae68813',
      rate_adjustment: 0.033,
    },
    {
      id: 'e3ab5e72-7fab-4ad8-b8dd-9d455885b1c0',
      grid_id: '6410100c-2c34-4f0e-baad-ed9de5299dd8',
      position_id: '8b98f19d-85df-40f2-819b-bdf8eae68813',
      rate_adjustment: 0.066,
    },
    {
      id: '269f6416-0aa6-4b42-a95e-5876568d54d6',
      grid_id: '851f9d71-fc20-4055-becd-41ecf50d6750',
      position_id: '8b98f19d-85df-40f2-819b-bdf8eae68813',
      rate_adjustment: 0.099,
    },
    // Dev Ops 27
    {
      id: '15886889-2063-4db3-9ff2-59d61db8b040',
      grid_id: '6410100c-2c34-4f0e-baad-ed9de5299dd8',
      position_id: 'fa931d17-41cb-4967-b9aa-ada43391674c',
      rate_adjustment: 0.066,
    },
    // Product Manager 30, Band 3
    {
      id: 'b08fcb13-9b25-41a3-84f3-acbd85734fd5',
      grid_id: '851f9d71-fc20-4055-becd-41ecf50d6750',
      position_id: '69982e41-3557-4c86-bfed-ff2f09574823',
      rate_adjustment: 0.099,
    },
    {
      id: 'ebe0ea1f-6908-444c-b724-18eaa3c4e0b5',
      grid_id: 'dcca8de3-bc01-4e24-84b0-3e89be512c1a',
      position_id: '8212a5b1-5efb-4e45-a48c-070043f83121',
      rate_adjustment: 0,
    },
    // Scrum Master 24, 27
    {
      id: 'e5980187-40b6-44eb-a2c6-3058c496b8a7',
      grid_id: '6dd3345c-00b1-410e-b584-11315af2b3db',
      position_id: '92588e9b-4722-4579-af4a-c98311ae182b',
      rate_adjustment: 0.066,
    },
    {
      id: '7ad7f4ef-72b4-4854-a5ae-b981b1cfb56d',
      grid_id: '6410100c-2c34-4f0e-baad-ed9de5299dd8',
      position_id: '92588e9b-4722-4579-af4a-c98311ae182b',
      rate_adjustment: 0.099,
    },
    // Site Reliability Specialist 27, 30
    {
      id: '17a89f02-95b0-4ab8-b44a-65a1680e2b34',
      grid_id: '6410100c-2c34-4f0e-baad-ed9de5299dd8',
      position_id: 'd1de1a6b-5277-4ae1-978c-0ad28ebf72da',
      rate_adjustment: 0.066,
    },
    {
      id: '3952883b-5cc5-4e8d-98b4-b5af03ef1772',
      grid_id: '851f9d71-fc20-4055-becd-41ecf50d6750',
      position_id: 'd1de1a6b-5277-4ae1-978c-0ad28ebf72da',
      rate_adjustment: 0.099,
    },
    // User Experience Designer 24, 27
    {
      id: 'd7f7c1f0-e051-4e94-a2d5-c0edb569bef7',
      grid_id: '6dd3345c-00b1-410e-b584-11315af2b3db',
      position_id: '458e6de8-b90a-4983-977f-580001c2d96a',
      rate_adjustment: 0,
    },
    {
      id: 'a11e4886-4d5b-4ae2-9eba-968c0a193f52',
      grid_id: '6410100c-2c34-4f0e-baad-ed9de5299dd8',
      position_id: '458e6de8-b90a-4983-977f-580001c2d96a',
      rate_adjustment: 0,
    },
    // User Experience Researcher 24, 27
    {
      id: 'abc74224-a5cf-47b5-8bc8-aff44fc7232d',
      grid_id: '6dd3345c-00b1-410e-b584-11315af2b3db',
      position_id: '5078204f-03c7-4d9d-a144-8c646aeda40b',
      rate_adjustment: 0.066,
    },
    {
      id: '062a2580-f9ea-4258-9882-23a3642e377b',
      grid_id: '6410100c-2c34-4f0e-baad-ed9de5299dd8',
      position_id: '5078204f-03c7-4d9d-a144-8c646aeda40b',
      rate_adjustment: 0.099,
    },
  ],
  remove: [],
};

export const applyClassificationSeeds = async (commandBus: CommandBus<ICommand>, eventStore: EventStoreDBClient) => {
  const { upsert, remove } = classificationSeeds;

  for await (const seed of upsert) {
    validateObject(seed, ClassificationSeed);

    // Check if the stream exists
    const events = handleEmpty(
      eventStore.readStream(`classification-${seed.id}`, {
        direction: FORWARDS,
        fromRevision: START,
        maxCount: 1,
      }),
    );

    const { value } = await events.next();
    if (value == null) {
      // Stream doesn't exist -- create it
      const command = new CreateClassificationCommand(seed, { created_by: SYSTEM_USER_ID });
      await commandBus.execute(command);
    } else {
      // Stream exists -- update it
      const command = new UpdateClassificationCommand(seed, { created_by: SYSTEM_USER_ID });
      await commandBus.execute(command);
    }
  }

  for await (const seed of remove) {
    const command = new DeleteClassificationCommand(seed, { created_by: SYSTEM_USER_ID });
    await commandBus.execute(command);
  }
};
