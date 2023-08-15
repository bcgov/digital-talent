import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { CompetitionSkillCommandHandlers } from './competition-skill/commands';
import { CompetitionSkillEventHandlers } from './competition-skill/events';
import { CompetitionSkillCommandResolver } from './competition-skill/resolvers/competition-skill-command.resolver';
import { CompetitionCommandHandlers } from './competition/commands';
import { CompetitionEventHandlers } from './competition/events';
import { CompetitionCommandResolver } from './competition/resolvers/competition-command.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [
    CompetitionCommandResolver,
    ...CompetitionCommandHandlers,
    ...CompetitionEventHandlers,
    CompetitionSkillCommandResolver,
    ...CompetitionSkillCommandHandlers,
    ...CompetitionSkillEventHandlers,
  ],
})
export class CompetitionModule {}
