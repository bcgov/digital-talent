import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { OccupationGroupCommandHandlers } from './commands';
import { OccupationGroupEventHandlers } from './events';
import { OccupationGroupQueryHandlers } from './queries';
import { OccupationGroupResolver } from './resolvers/occupation-group.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [
    OccupationGroupResolver,
    ...OccupationGroupCommandHandlers,
    ...OccupationGroupEventHandlers,
    ...OccupationGroupQueryHandlers,
  ],
})
export class OccupationGroupModule {}
