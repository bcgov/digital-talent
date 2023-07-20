import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { CommandHandlers } from './commands';
import { EventHandlers } from './events';
import { GridResolver } from './grid.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [GridResolver, ...CommandHandlers, ...EventHandlers],
})
export class ClassificationModule {}
