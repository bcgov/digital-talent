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
import { PositionResolver } from './position/position.resolver';
import { PositionQueryHandlers } from './position/queries';

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
  ],
})
export class ClassificationModule {}
