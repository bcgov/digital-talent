import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { CommandHandlers } from './commands';
import { EventHandlers } from './events';
import { CompetitionScheduleResolver } from './competition-schedule.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [CompetitionScheduleResolver, ...CommandHandlers, ...EventHandlers],
})
export class CompetitionScheduleModule {}
