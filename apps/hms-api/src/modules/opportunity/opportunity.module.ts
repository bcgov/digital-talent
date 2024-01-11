import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TextParserMiddleware } from '../../middleware/text-parser.middleware';
import { PrismaModule } from '../prisma/prisma.module';
import { OpportunityLocationCommandHandlers } from './opportunity-location/commands';
import { OpportunityLocationEventHandlers } from './opportunity-location/events';
import { OpportunityLocationQueryHandlers } from './opportunity-location/queries';
import { OpportunityLocationResolver } from './opportunity-location/resolvers/opportunity-location.resolver';
import { OpportunitySkillCommandHandlers } from './opportunity-skill/commands';
import { OpportunitySkillEventHandlers } from './opportunity-skill/events';
import { OpportunitySkillQueryHandlers } from './opportunity-skill/queries';
import { OpportunitySkillResolver } from './opportunity-skill/resolvers/opportunity-skill.resolver';
import { OpportunityCommandHandlers } from './opportunity/commands';
import { OpportunityEventHandlers } from './opportunity/events';
import { OpportunityQueryHandlers } from './opportunity/queries';
import { OpportunityResolver } from './opportunity/resolvers/opportunity.resolver';

@Module({
  imports: [CqrsModule, PrismaModule],
  providers: [
    OpportunityLocationResolver,
    OpportunitySkillResolver,
    OpportunityResolver,
    ...OpportunityLocationCommandHandlers,
    ...OpportunityLocationEventHandlers,
    ...OpportunityLocationQueryHandlers,
    ...OpportunitySkillCommandHandlers,
    ...OpportunitySkillEventHandlers,
    ...OpportunitySkillQueryHandlers,
    ...OpportunityCommandHandlers,
    ...OpportunityEventHandlers,
    ...OpportunityQueryHandlers,
  ],
})
export class OpportunityModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TextParserMiddleware)
      .forRoutes({ path: 'rest/opportunitys/import-csv', method: RequestMethod.POST });
  }
}
