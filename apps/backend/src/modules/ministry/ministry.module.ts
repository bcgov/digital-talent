import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { CommandHandlers } from './commands';
import { EventHandlers } from './events';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [...CommandHandlers, ...EventHandlers],
})
export class MinistryModule {}
