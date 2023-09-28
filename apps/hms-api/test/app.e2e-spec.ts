// eslint-disable-next-line max-classes-per-file
import { EventStoreDBClient } from '@eventstore/db-client';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ExecutionContext, INestApplication, Injectable } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommandBus, CqrsModule, QueryBus } from '@nestjs/cqrs';
import { GraphQLModule } from '@nestjs/graphql';
import { Test, TestingModule } from '@nestjs/testing';
import { Request } from 'supertest';
import { ApplicationModule } from '../src/modules/application/application.module';
import { ClassificationModule } from '../src/modules/classification/classification.module';
import { CommentModule } from '../src/modules/comment/comment.module';
import { CompetitionScheduleModule } from '../src/modules/competition-schedule/competition-schedule.module';
import { CompetitionModule } from '../src/modules/competition/competition.module';
import { ElistOfferModule } from '../src/modules/elist/elist-offer/elist-offer.module';
import { ElistModule } from '../src/modules/elist/elist/elist.module';
import { EventStoreModule } from '../src/modules/event-store/event-store.module';
import { GridModule } from '../src/modules/grid/grid.module';
import { IdentityModule } from '../src/modules/identity/identity.module';
import { JobDescriptionModule } from '../src/modules/job-description/job-description.module';
import { LocationModule } from '../src/modules/location/location.module';
import { MinistryModule } from '../src/modules/ministry/ministry.module';
import { OccupationGroupModule } from '../src/modules/occupation-group/occupation-group.module';
import { OpportunityModule } from '../src/modules/opportunity/opportunity.module';
import { PrismaService } from '../src/modules/prisma/prisma.service';
import { SkillModule } from '../src/modules/skill/skill.module';
import { SyncUserCommand } from '../src/modules/user/commands/sync-user/sync-user.command';
import { UserModule } from '../src/modules/user/user.module';
import { applySeeds, seedsExist } from '../src/seeds';
import { applicationTests } from './application-tests';
import { backupContainerVolumes } from './backup-volumes';
import { competitionTests } from './competition-tests';
import { restoreContainerVolumes } from './restore-backup-volumes';
import { seedTests } from './seed-tests';

// seeding takes a while
jest.setTimeout(90000);

export const testContext = {
  app: null,
  filesChanged: false,
};

export async function pollUntilTrue(
  testFunction: () => Promise<boolean>,
  timeout = 5000,
  interval = 100,
): Promise<void> {
  // Since SQRS provides eventual consistency, making mutations does not immidietely propagate results to the read db
  const startTime = Date.now();

  while (Date.now() - startTime < timeout) {
    // eslint-disable-next-line no-await-in-loop
    const result = await testFunction();
    if (result) {
      return;
    }
    // eslint-disable-next-line no-await-in-loop, no-promise-executor-return
    await new Promise((res) => setTimeout(res, interval));
  }

  throw new Error('Polling timed out');
}

@Injectable()
export class MockAuthGuard {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    request.user = {
      id: '4e0b74a8-1b63-47fa-a082-684ab7301ea9',
    };
    return true;
  }
}

async function getTestingModule() {
  const module: TestingModule = await Test.createTestingModule({
    imports: [
      CqrsModule,
      ConfigModule.forRoot({
        isGlobal: true,
        // envFilePath: '.env.test',
      }),
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
      ApplicationModule,
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
    providers: [PrismaService],
  })
    .overrideGuard(MockAuthGuard) // This assumes that your guard is already used in the module
    .useValue(new MockAuthGuard())
    .compile();

  return module;
}

describe('E2E tests', () => {
  // let resolver: CompetitionResolver;
  let app: INestApplication;

  beforeAll(async () => {
    const module = await getTestingModule();
    // const prismaService = module.get<PrismaService>(PrismaService);
    // resolver = module.get<CompetitionResolver>(CompetitionResolver);
    app = module.createNestApplication<INestApplication>();

    // attach a fake user to every request
    app.use((req, res, next) => {
      req.user = {
        id: '4e0b74a8-1b63-47fa-a082-684ab7301ea9',
      };
      next();
    });

    let commandBus = module.get(CommandBus);
    let eventStore = module.get(EventStoreDBClient);
    let queryBus = module.get(QueryBus);

    await app.init();

    // apply seeds if they haven't been applied before
    if (!(await seedsExist(queryBus))) {
      await applySeeds(commandBus, eventStore);
      await backupContainerVolumes();
    } else {
      await app.close();
      // eslint-disable-next-line no-console
      console.log('restoring volumes..');
      await restoreContainerVolumes();
      // eslint-disable-next-line no-console
      console.log('done restoring volumes..');

      const module = await getTestingModule();

      app = module.createNestApplication<INestApplication>();
      // attach a fake user to every request
      app.use((req, res, next) => {
        req.user = {
          id: '4e0b74a8-1b63-47fa-a082-684ab7301ea9',
        };
        next();
      });
      commandBus = module.get(CommandBus);
      eventStore = module.get(EventStoreDBClient);
      queryBus = module.get(QueryBus);
      await app.init();
    }

    // Create an idditional user
    const metadata = { created_by: '4e0b74a8-1b63-47fa-a082-684ab7301ea9' };
    const command = new SyncUserCommand(
      {
        id: '4e0b74a8-1b63-47fa-a082-684ab7301ea0',
        roles: [],
        deltek_id: null,
        email: 'test@test.com',
        name: 'Test Test',
      },
      metadata,
    );

    // eslint-disable-next-line no-await-in-loop
    await commandBus.execute(command);

    // // Get GraphQL schema
    // const graphQLSchemaHost = module.get<GraphQLSchemaHost>(GraphQLSchemaHost);
    // const { schema } = graphQLSchemaHost;

    // // Print the schema
    // const printedSchema = printSchema(schema);
    // console.log(printedSchema);
    testContext.app = app;
  });

  seedTests();
  competitionTests();
  applicationTests();

  afterAll(async () => {
    if (app) await app.close();
  });
});
