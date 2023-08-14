import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TextParserMiddleware } from '../../middleware/text-parser.middleware';
import { PrismaModule } from '../prisma/prisma.module';
import { CommandHandlers } from './commands';
import { EventHandlers } from './events';
import { ApplicationResolver } from './application.resolver';
import { ApplicationController } from './controllers/application.controller';
import { ApplicationService } from './application.service';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [ApplicationResolver, ...CommandHandlers, ...EventHandlers, ApplicationService],
  controllers: [ApplicationController],
})
export class ApplicationModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TextParserMiddleware)
      .forRoutes({ path: 'rest/applications/import-csv', method: RequestMethod.POST });
  }
}
