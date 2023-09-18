import { EventStoreDBClient } from '@eventstore/db-client';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { CommandBus } from '@nestjs/cqrs';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { applySeeds } from './seeds';

export async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  app.enableCors();
  app.useLogger(app.get(Logger));
  app.useGlobalPipes(new ValidationPipe({ skipMissingProperties: false, transform: true, whitelist: true }));

  await app.listen(4000);

  const commandBus = app.get(CommandBus);
  const eventStore = app.get(EventStoreDBClient);
  await applySeeds(commandBus, eventStore);
}
bootstrap();
