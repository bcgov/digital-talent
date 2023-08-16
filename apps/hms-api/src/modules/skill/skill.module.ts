import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { SkillCommandHandlers } from './commands';
import { SkillEventHandlers } from './events';
import { SkillResolver } from './skill.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [SkillResolver, ...SkillCommandHandlers, ...SkillEventHandlers],
})
export class SkillModule {}
