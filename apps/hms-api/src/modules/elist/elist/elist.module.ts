import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ElistCommandHandlers } from './commands';
import { ElistEventHandlers } from './events';
import { ElistResolver } from './elist.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [ElistResolver, ...ElistCommandHandlers, ...ElistEventHandlers],
})
export class ElistModule {}
