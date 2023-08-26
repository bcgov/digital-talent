import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TextParserMiddleware } from '../../middleware/text-parser.middleware';
import { PrismaModule } from '../prisma/prisma.module';
import { ApplicationCommandHandlers } from './application/commands';
import { ApplicationEventHandlers } from './application/events';
import { ApplicationLocationCommandHandlers } from './application-location/commands';
import { ApplicationLocationEventHandlers } from './application-location/events';
import { ApplicationLocationResolver } from './application-location/application-location.resolver';
import { ApplicationSkillCommandHandlers } from './application-skill/commands';
import { ApplicationSkillEventHandlers } from './application-skill/events';
import { ApplicationSkillResolver } from './application-skill/application-skill.resolver';
import { ApplicationResolver } from './application/application.resolver';
import { ApplicationController } from './application/controllers/application.controller';
import { ApplicationService } from './application/application.service';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [
    ApplicationResolver,
    ApplicationLocationResolver,
    ApplicationSkillResolver,
    ApplicationService,
    ...ApplicationCommandHandlers,
    ...ApplicationEventHandlers,
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
