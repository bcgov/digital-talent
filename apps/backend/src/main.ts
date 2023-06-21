import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { CommandBus } from '@nestjs/cqrs';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { applySeeds } from './seeds';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  app.useLogger(app.get(Logger));
  app.useGlobalPipes(new ValidationPipe({ skipMissingProperties: false, transform: true, whitelist: true }));

  await app.listen(4000);

  const commandBus = app.get(CommandBus);
  await applySeeds(commandBus);
}
bootstrap();
