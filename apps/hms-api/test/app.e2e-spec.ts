import { EventStoreDBClient } from '@eventstore/db-client';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { INestApplication } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommandBus, CqrsModule, QueryBus } from '@nestjs/cqrs';
import { GraphQLModule } from '@nestjs/graphql';
import { Test, TestingModule } from '@nestjs/testing';
import supertest, { Request } from 'supertest';
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
import { UserModule } from '../src/modules/user/user.module';
import { applySeeds, seedsExist } from '../src/seeds';

// seeding takes a while
jest.setTimeout(90000);

describe('E2E tests', () => {
  // let resolver: ClassificationResolver;
  let app: INestApplication;

  beforeAll(async () => {
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
    }).compile();

    // const prismaService = module.get<PrismaService>(PrismaService);
    // resolver = module.get<ClassificationResolver>(ClassificationResolver);
    app = module.createNestApplication<INestApplication>();

    const commandBus = module.get(CommandBus);
    const eventStore = module.get(EventStoreDBClient);
    const queryBus = module.get(QueryBus);

    await app.init();

    if (!(await seedsExist(queryBus))) {
      await applySeeds(commandBus, eventStore);
    }

    // Get GraphQL schema
    // const graphQLSchemaHost = module.get<GraphQLSchemaHost>(GraphQLSchemaHost);
    // const { schema } = graphQLSchemaHost;

    // Print the schema
    // const printedSchema = printSchema(schema);
    // console.log(printedSchema);
  });

  it(`should have system admin user and it is the only user`, async () => {
    const query = `
      query {
        users {
          id
          deltek_id
          name
          email
          roles
          created_at
          updated_at
        }
      }
    `;

    return supertest(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200)
      .then((response) => {
        // Check that users are defined and an array
        expect(response.body.data.users).toBeDefined();
        expect(Array.isArray(response.body.data.users)).toBe(true);

        // Check there is only one user
        expect(response.body.data.users.length).toEqual(1);

        // Get the first user from the array
        const [user] = response.body.data.users;

        // Check the details of that user
        expect(user.name).toEqual('System User');
        expect(user.roles).toEqual(expect.arrayContaining(['admin']));
      });
  });

  it(`should have correct number of grid seeds`, async () => {
    const query = `
      query {
        grids {
          id
        }
      }
    `;

    return supertest(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200)
      .then((response) => {
        // Check that users are defined and an array
        expect(response.body.data.grids).toBeDefined();
        expect(Array.isArray(response.body.data.grids)).toBe(true);

        // Check there is only one user
        expect(response.body.data.grids.length).toEqual(6);
      });
  });

  it(`should have correct number of occupation group seeds`, async () => {
    const query = `
      query {
        occupationGroups {
          id
        }
      }
    `;

    return supertest(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200)
      .then((response) => {
        // Check that users are defined and an array
        expect(response.body.data.occupationGroups).toBeDefined();
        expect(Array.isArray(response.body.data.occupationGroups)).toBe(true);

        // Check there is only one user
        expect(response.body.data.occupationGroups.length).toEqual(3);
      });
  });

  it(`should have correct number of classifications seeds`, async () => {
    const query = `
      query {
        classifications {
          id
        }
      }
    `;

    return supertest(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200)
      .then((response) => {
        // Check that users are defined and an array
        expect(response.body.data.classifications).toBeDefined();
        expect(Array.isArray(response.body.data.classifications)).toBe(true);

        // Check there is only one user
        expect(response.body.data.classifications.length).toEqual(8);
      });
  });

  it(`should have correct number of jobDescriptions seeds`, async () => {
    const query = `
      query {
        jobDescriptions {
          id
        }
      }
    `;

    return supertest(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200)
      .then((response) => {
        // Check that users are defined and an array
        expect(response.body.data.jobDescriptions).toBeDefined();
        expect(Array.isArray(response.body.data.jobDescriptions)).toBe(true);

        // Check there is only one user
        expect(response.body.data.jobDescriptions.length).toEqual(16);
      });
  });

  it(`should have correct number of ministries seeds`, async () => {
    const query = `
      query {
        ministries {
          id
        }
      }
    `;

    return supertest(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200)
      .then((response) => {
        // Check that users are defined and an array
        expect(response.body.data.ministries).toBeDefined();
        expect(Array.isArray(response.body.data.ministries)).toBe(true);

        // Check there is only one user
        expect(response.body.data.ministries.length).toEqual(47);
      });
  });

  it(`should have correct number of skills seeds`, async () => {
    const query = `
      query {
        skills {
          id
        }
      }
    `;

    return supertest(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200)
      .then((response) => {
        // Check that users are defined and an array
        expect(response.body.data.skills).toBeDefined();
        expect(Array.isArray(response.body.data.skills)).toBe(true);

        // Check there is only one user
        expect(response.body.data.skills.length).toEqual(444);
      });
  });

  it(`should have correct number of locations seeds`, async () => {
    const query = `
      query {
        locations {
          id
        }
      }
    `;

    return supertest(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200)
      .then((response) => {
        // Check that users are defined and an array
        expect(response.body.data.locations).toBeDefined();
        expect(Array.isArray(response.body.data.locations)).toBe(true);

        // Check there is only one user
        expect(response.body.data.locations.length).toEqual(168);
      });
  });

  afterAll(async () => {
    if (app) await app.close();
  });
});
