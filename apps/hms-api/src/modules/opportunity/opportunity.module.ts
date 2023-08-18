import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TextParserMiddleware } from '../../middleware/text-parser.middleware';
import { PrismaModule } from '../prisma/prisma.module';
import { OpportunityLocationCommandHandlers } from './opportunity-location/commands';
import { OpportunityLocationEventHandlers } from './opportunity-location/events';
import { OpportunityLocationResolver } from './opportunity-location/opportunity-location.resolver';
import { OpportunitySkillCommandHandlers } from './opportunity-skill/commands';
import { OpportunitySkillEventHandlers } from './opportunity-skill/events';
import { OpportunitySkillResolver } from './opportunity-skill/opportunity-skill.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [
    OpportunityLocationResolver,
    OpportunitySkillResolver,
    ...OpportunityLocationCommandHandlers,
    ...OpportunityLocationEventHandlers,
    ...OpportunitySkillCommandHandlers,
    ...OpportunitySkillEventHandlers,
  ],
})
export class OpportunityModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TextParserMiddleware)
      .forRoutes({ path: 'rest/opportunitys/import-csv', method: RequestMethod.POST });
  }
}
