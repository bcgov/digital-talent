import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../../prisma/prisma.module';
import { ElistCommandHandlers } from './commands';
import { ElistEventHandlers } from './events';
import { ElistQueryHandlers } from './queries';
import { ElistResolver } from './resolvers/elist.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [ElistResolver, ...ElistCommandHandlers, ...ElistEventHandlers, ...ElistQueryHandlers],
})
export class ElistModule {}
