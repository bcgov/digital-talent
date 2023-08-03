import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { SkillCommandHandlers } from './commands';
import { SkillEventHandlers } from './events';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [...SkillCommandHandlers, ...SkillEventHandlers],
})
export class SkillModule {}
