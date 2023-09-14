import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { MinistryCommandHandlers } from './commands';
import { MinistryEventHandlers } from './events';
import { MinistryQueryHandlers } from './queries';
import { MinistryResolver } from './resolvers/ministry.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [MinistryResolver, ...MinistryCommandHandlers, ...MinistryEventHandlers, ...MinistryQueryHandlers],
})
export class MinistryModule {}
