import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule } from '@nestjs/cache-manager';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { Request } from 'express';
import { LoggerModule } from 'nestjs-pino';
import { v4 as uuidv4 } from 'uuid';
import { AppConfigDto } from './dtos/app-config.dto';
import { RequestIdMiddleware } from './middleware/request-id.middleware';
import { ApplicationModule } from './modules/application/application.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { RoleGuard } from './modules/auth/guards/role.guard';
import { ClassificationModule } from './modules/classification/classification.module';
import { CommentModule } from './modules/comment/comment.module';
import { CompetitionScheduleModule } from './modules/competition-schedule/competition-schedule.module';
import { CompetitionModule } from './modules/competition/competition.module';
import { ElistOfferModule } from './modules/elist/elist-offer/elist-offer.module';
import { ElistModule } from './modules/elist/elist/elist.module';
import { EventStoreModule } from './modules/event-store/event-store.module';
import { GridModule } from './modules/grid/grid.module';
import { IdentityModule } from './modules/identity/identity.module';
import { JobDescriptionModule } from './modules/job-description/job-description.module';
import { LocationModule } from './modules/location/location.module';
import { MinistryModule } from './modules/ministry/ministry.module';
import { OccupationGroupModule } from './modules/occupation-group/occupation-group.module';
import { OpportunityModule } from './modules/opportunity/opportunity.module';
import { SkillModule } from './modules/skill/skill.module';
import { UserModule } from './modules/user/user.module';
import { validateAppConfig } from './utils/validate-app-config.util';

@Module({
  imports: [
    CacheModule.register({ isGlobal: true }),
    ConfigModule.forRoot({ isGlobal: true, validate: validateAppConfig }),
    EventStoreModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      context: ({ req }) => ({ req } as { req: Request }),
      resolvers: {
        // Range: GraphQLRange,
        // UUID: GraphQLUUID,
      },
    }),
    LoggerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService<AppConfigDto, true>) => {
        const NODE_ENV = config.get('NODE_ENV');

        return {
          pinoHttp: {
            genReqId: (req, res) => {
              const existingId = req.id ?? req.headers['x-request-id'];
              if (existingId) return existingId;

              const id = uuidv4();
              res.setHeader('X-Request-Id', id);
              return id;
            },
            level: NODE_ENV !== 'production' ? 'debug' : 'info',
            transport: NODE_ENV !== 'production' ? { target: 'pino-pretty' } : undefined,
          },
        };
      },
    }),
    ApplicationModule,
    AuthModule,
    ClassificationModule,
    CommentModule,
    CompetitionModule,
    CompetitionScheduleModule,
    ElistModule,
    ElistOfferModule,
    GridModule,
    IdentityModule,
    JobDescriptionModule,
    LocationModule,
    MinistryModule,
    OccupationGroupModule,
    OpportunityModule,
    SkillModule,
    UserModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: RoleGuard },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes('*');
  }
}
