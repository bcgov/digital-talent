import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { SkillCommandHandlers } from './commands';
import { SkillEventHandlers } from './events';
import { SkillQueryHandlers } from './queries';
import { SkillResolver } from './resolvers/skill.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [SkillResolver, ...SkillCommandHandlers, ...SkillEventHandlers, ...SkillQueryHandlers],
})
export class SkillModule {}
