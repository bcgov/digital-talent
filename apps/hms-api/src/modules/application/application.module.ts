import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TextParserMiddleware } from '../../middleware/text-parser.middleware';
import { PrismaModule } from '../prisma/prisma.module';
import { ApplicationLocationCommandHandlers } from './application-location/commands';
import { ApplicationLocationEventHandlers } from './application-location/events';
import { ApplicationLocationQueryHandlers } from './application-location/queries';
import { ApplicationLocationResolver } from './application-location/resolvers/application-location.resolver';
import { ApplicationSkillCommandHandlers } from './application-skill/commands';
import { ApplicationSkillEventHandlers } from './application-skill/events';
import { ApplicationSkillQueryHandlers } from './application-skill/queries';
import { ApplicationSkillResolver } from './application-skill/resolvers/application-skill.resolver';
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
    ...ApplicationLocationQueryHandlers,
    ...ApplicationSkillCommandHandlers,
    ...ApplicationSkillEventHandlers,
    ...ApplicationSkillQueryHandlers,
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
