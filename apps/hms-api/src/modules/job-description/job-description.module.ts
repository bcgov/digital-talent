import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { JobDescriptionCommandHandlers } from './commands';
import { JobDescriptionEventHandlers } from './events';
import { JobDescriptionQueryHandlers } from './queries';
import { JobDescriptionResolver } from './resolvers/job-description.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [
    JobDescriptionResolver,
    ...JobDescriptionCommandHandlers,
    ...JobDescriptionEventHandlers,
    ...JobDescriptionQueryHandlers,
  ],
})
export class JobDescriptionModule {}
