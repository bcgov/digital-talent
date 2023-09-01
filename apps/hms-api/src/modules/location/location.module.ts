import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { LocationCommandHandlers } from './commands';
import { LocationEventHandlers } from './events';
import { LocationQueryHandlers } from './queries';
import { LocationResolver } from './resolvers/location.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [LocationResolver, ...LocationCommandHandlers, ...LocationEventHandlers, ...LocationQueryHandlers],
})
export class LocationModule {}
