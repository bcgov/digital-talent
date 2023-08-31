import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { ClassificationCommandHandlers } from './commands';
import { ClassificationEventHandlers } from './events';
import { ClassificationQueryHandlers } from './queries';
import { ClassificationResolver } from './resolvers/classification.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [
    ClassificationResolver,
    ...ClassificationCommandHandlers,
    ...ClassificationEventHandlers,
    ...ClassificationQueryHandlers,
  ],
})
export class ClassificationModule {}
