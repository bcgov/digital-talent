import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { CompetitionSkillCommandHandlers } from './competition-skill/commands';
import { CompetitionSkillEventHandlers } from './competition-skill/events';
import { CompetitionSkillQueryHandlers } from './competition-skill/queries';
import { CompetitionSkillCommandResolver } from './competition-skill/resolvers/competition-skill-command.resolver';
import { CompetitionCommandHandlers } from './competition/commands';
import { CompetitionEventHandlers } from './competition/events';
import { CompetitionQueryHandlers } from './competition/queries';
import { CompetitionResolver } from './competition/resolvers/competition.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [
    CompetitionResolver,
    ...CompetitionCommandHandlers,
    ...CompetitionEventHandlers,
    ...CompetitionQueryHandlers,
    CompetitionSkillCommandResolver,
    ...CompetitionSkillCommandHandlers,
    ...CompetitionSkillEventHandlers,
    ...CompetitionSkillQueryHandlers,
  ],
})
export class CompetitionModule {}
