import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { CompetitionCommandHandlers } from './competition/commands';
import { CompetitionEventHandlers } from './competition/events';
import { CompetitionCommandResolver } from './competition/resolvers/competition-command.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [CompetitionCommandResolver, ...CompetitionCommandHandlers, ...CompetitionEventHandlers],
})
export class CompetitionModule {}
