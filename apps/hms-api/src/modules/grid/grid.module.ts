import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { GridCommandHandlers } from './commands';
import { GridEventHandlers } from './events';
import { GridQueryHandlers } from './queries';
import { GridResolver } from './resolvers/grid.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [GridResolver, ...GridCommandHandlers, ...GridEventHandlers, ...GridQueryHandlers],
})
export class GridModule {}
