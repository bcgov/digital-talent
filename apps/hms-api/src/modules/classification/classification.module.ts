import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { ClassificationCommandHandlers } from './classification/commands';
import { ClassificationEventHandlers } from './classification/events';
import { ClassificationQueryHandlers } from './classification/queries';
import { ClassificationResolver } from './classification/resolvers/classification.resolver';
import { GridCommandHandlers } from './grid/commands';
import { GridEventHandlers } from './grid/events';
import { GridQueryHandlers } from './grid/queries';
import { PositionCommandHandlers } from './position/commands';
import { PositionEventHandlers } from './position/events';
import { PositionQueryHandlers } from './position/queries';
import { PositionResolver } from './position/resolvers/position.resolver';
import { GridResolver } from './grid/resolvers/grid.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [
    ClassificationResolver,
    PositionResolver,
    ...ClassificationCommandHandlers,
    ...ClassificationEventHandlers,
    ...ClassificationQueryHandlers,
    ...GridCommandHandlers,
    ...GridEventHandlers,
    ...GridQueryHandlers,
    ...PositionCommandHandlers,
    ...PositionEventHandlers,
    ...PositionQueryHandlers,
    GridResolver,
  ],
})
export class ClassificationModule {}
