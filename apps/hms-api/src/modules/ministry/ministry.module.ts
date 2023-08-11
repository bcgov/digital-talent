import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { MinistryCommandHandlers } from './commands';
import { MinistryEventHandlers } from './events';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [...MinistryCommandHandlers, ...MinistryEventHandlers],
})
export class MinistryModule {}
