import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { ClassificationCommandHandlers } from './classification/commands';
import { ClassificationEventHandlers } from './classification/events';
import { GridCommandHandlers } from './grid/commands';
import { GridEventHandlers } from './grid/events';
import { PositionCommandHandlers } from './position/commands';
import { PositionEventHandlers } from './position/events';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [
    ...ClassificationCommandHandlers,
    ...ClassificationEventHandlers,
    ...GridCommandHandlers,
    ...GridEventHandlers,
    ...PositionCommandHandlers,
    ...PositionEventHandlers,
  ],
})
export class ClassificationModule {}
