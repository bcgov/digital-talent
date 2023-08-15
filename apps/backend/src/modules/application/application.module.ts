import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TextParserMiddleware } from '../../middleware/text-parser.middleware';
import { PrismaModule } from '../prisma/prisma.module';
import { ApplicationCommandHandlers } from './application/commands';
import { ApplicationEventHandlers } from './application/events';
import { ApplicationLocationCommandHandlers } from './application-location/commands';
import { ApplicationLocationEventHandlers } from './application-location/events';
import { ApplicationResolver } from './application/application.resolver';
import { ApplicationLocationResolver } from './application-location/application-location.resolver';
import { ApplicationController } from './application/controllers/application.controller';
import { ApplicationService } from './application/application.service';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [
    ApplicationResolver,
    ApplicationLocationResolver,
    ...ApplicationCommandHandlers,
    ...ApplicationEventHandlers,
    ...ApplicationLocationCommandHandlers,
    ...ApplicationLocationEventHandlers,
    ApplicationService,
  ],
  controllers: [ApplicationController],
})
export class ApplicationModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TextParserMiddleware)
      .forRoutes({ path: 'rest/applications/import-csv', method: RequestMethod.POST });
  }
}
