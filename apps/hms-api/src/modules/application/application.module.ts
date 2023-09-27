import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TextParserMiddleware } from '../../middleware/text-parser.middleware';
import { PrismaModule } from '../prisma/prisma.module';
import { ApplicationLocationResolver } from './application-location/application-location.resolver';
import { ApplicationLocationCommandHandlers } from './application-location/commands';
import { ApplicationLocationEventHandlers } from './application-location/events';
import { ApplicationSkillResolver } from './application-skill/application-skill.resolver';
import { ApplicationSkillCommandHandlers } from './application-skill/commands';
import { ApplicationSkillEventHandlers } from './application-skill/events';
import { ApplicationService } from './application/application.service';
import { ApplicationCommandHandlers } from './application/commands';
import { ApplicationController } from './application/controllers/application.controller';
import { ApplicationEventHandlers } from './application/events';
import { ApplicationQueryHandlers } from './application/queries';
import { ApplicationResolver } from './application/resolvers/application.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [
    ApplicationResolver,
    ApplicationLocationResolver,
    ApplicationSkillResolver,
    ApplicationService,
    ...ApplicationCommandHandlers,
    ...ApplicationEventHandlers,
    ...ApplicationQueryHandlers,
    ...ApplicationLocationCommandHandlers,
    ...ApplicationLocationEventHandlers,
    ...ApplicationSkillCommandHandlers,
    ...ApplicationSkillEventHandlers,
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
