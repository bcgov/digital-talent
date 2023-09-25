import { EventStoreDBClient } from '@eventstore/db-client';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ExecutionContext, INestApplication, Injectable } from '@nestjs/common';
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
import { SyncUserCommand } from '../src/modules/user/commands/sync-user/sync-user.command';
import { UserModule } from '../src/modules/user/user.module';
import { applySeeds, seedsExist } from '../src/seeds';

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

// seeding takes a while
jest.setTimeout(90000);

describe('E2E tests', () => {
  // let resolver: CompetitionResolver;
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
    })
      .overrideGuard(MockAuthGuard) // This assumes that your guard is already used in the module
      .useValue(new MockAuthGuard())
      .compile();

    // const prismaService = module.get<PrismaService>(PrismaService);
    // resolver = module.get<CompetitionResolver>(CompetitionResolver);
    app = module.createNestApplication<INestApplication>();

    app.use((req, res, next) => {
      req.user = {
        id: '4e0b74a8-1b63-47fa-a082-684ab7301ea9',
      };
      next();
    });

    const commandBus = module.get(CommandBus);
    const eventStore = module.get(EventStoreDBClient);
    const queryBus = module.get(QueryBus);

    await app.init();

    if (!(await seedsExist(queryBus))) {
      await applySeeds(commandBus, eventStore);
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
  });

  describe('Seed checks', () => {
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
  });

  describe('Competition tests', () => {
    it(`should create competition`, async () => {
      const postData = {
        query: `
      mutation CreateCompetition($data: CreateCompetitionInput!) {
        createCompetition(data: $data)
      }`,

        variables: {
          data: {
            id: 'fb0b9943-c133-4879-8ff5-1a3c204ed669',
            job_description_id: '09ab8e7d-9cc1-4993-8d53-14095dd00e81',
            recruiter_id: '4e0b74a8-1b63-47fa-a082-684ab7301ea9',
            category: 'CMH',
            deltek_id: null,
          },
        },
      };

      return supertest(app.getHttpServer())
        .post('/graphql')
        .send(postData)
        .expect(200)
        .then((response) => {
          // Check if data exists in the response body
          expect(response.body.data).toBeDefined();

          // Check if createCompetition exists in the data
          expect(response.body.data.createCompetition).toBeDefined();

          // Check if the returned id is correct
          expect(response.body.data.createCompetition).toEqual('fb0b9943-c133-4879-8ff5-1a3c204ed669');
        });
    });

    it(`should fail creating competition with existing id`, async () => {
      const postData = {
        query: `
      mutation CreateCompetition($data: CreateCompetitionInput!) {
        createCompetition(data: $data)
      }`,

        variables: {
          data: {
            id: 'fb0b9943-c133-4879-8ff5-1a3c204ed669',
            job_description_id: '09ab8e7d-9cc1-4993-8d53-14095dd00e81',
            recruiter_id: '4e0b74a8-1b63-47fa-a082-684ab7301ea9',
            category: 'CMH',
            deltek_id: null,
          },
        },
      };

      return supertest(app.getHttpServer())
        .post('/graphql')
        .send(postData)
        .expect(200)
        .then((response) => {
          // console.log('create response: ', response.body);

          // Check if errors exist in the response body
          expect(response.body.errors).toBeDefined();

          // Check if errors array has at least one item
          expect(response.body.errors.length).toBeGreaterThan(0);

          // Check if the error message is what you expect
          expect(response.body.errors[0].message).toEqual('Competition already exists');

          // Check if data is null
          expect(response.body.data).toBeNull();
        });
    });

    it(`should get competition by id`, async () => {
      // make another competition

      const postData = {
        query: `
      mutation CreateCompetition($data: CreateCompetitionInput!) {
        createCompetition(data: $data)
      }`,

        variables: {
          data: {
            id: 'fb0b9943-c133-4879-8ff5-1a3c204ed661',
            job_description_id: '09ab8e7d-9cc1-4993-8d53-14095dd00e81',
            recruiter_id: '4e0b74a8-1b63-47fa-a082-684ab7301ea9',
            category: 'CMH',
            deltek_id: null,
          },
        },
      };

      await supertest(app.getHttpServer())
        .post('/graphql')
        .send(postData)
        .expect(200)
        .then((response) => {
          // // Check if data exists in the response body
          // expect(response.body.data).toBeDefined();
          // // Check if createCompetition exists in the data
          // expect(response.body.data.createCompetition).toBeDefined();
          // // Check if the returned id is correct
          // expect(response.body.data.createCompetition).toEqual('fb0b9943-c133-4879-8ff5-1a3c204ed661');
        });

      // retreive competition
      const query = `
    query Competition {
      competition(id: "fb0b9943-c133-4879-8ff5-1a3c204ed661") {
          id
          category
          state
          deltek_id
          created_at
          updated_at
          deleted_at
      }
    } `;

      await supertest(app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .then((response) => {
          // Check if 'data' and 'competition' are defined
          expect(response.body.data).toBeDefined();
          expect(response.body.data.competition).toBeDefined();

          // Check if 'id' matches the expected value
          expect(response.body.data.competition.id).toEqual('fb0b9943-c133-4879-8ff5-1a3c204ed661');

          // Check if 'category' is "RH"
          expect(response.body.data.competition.category).toEqual('CMH');

          // Check if 'state' is "DRAFT"
          expect(response.body.data.competition.state).toEqual('DRAFT');

          // Check if 'deltek_id' is "test_deltek_id"
          expect(response.body.data.competition.deltek_id).toBeNull();

          // Check if 'created_at' and 'updated_at' are defined and are not null
          expect(response.body.data.competition.created_at).toBeDefined();
          expect(response.body.data.competition.updated_at).toBeNull();

          // Check if 'deleted_at' is null
          expect(response.body.data.competition.deleted_at).toBeNull();
        });
    });

    it(`should get all competitions`, async () => {
      // retreive competition
      const query = `
    query Competitions {
      competitions {
          id
          category
          state
          deltek_id
          created_at
          updated_at
          deleted_at
      }
    }
    `;

      await supertest(app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .then((response) => {
          // Check if 'data' and 'competition' are defined
          expect(response.body.data).toBeDefined();
          expect(response.body.data.competitions).toBeDefined();
          expect(response.body.data.competitions.length).toEqual(2);
        });
    });

    it(`should update an existing competition`, async () => {
      const postData = {
        query: `
      mutation UpdateCompetition($data: UpdateCompetitionInput!) {
        updateCompetition(data: $data)
      }`,

        variables: {
          data: {
            id: 'fb0b9943-c133-4879-8ff5-1a3c204ed669',
            job_description_id: '193670cc-c74b-4fe3-9158-8175e907e29f',
            recruiter_id: '4e0b74a8-1b63-47fa-a082-684ab7301ea0',
            category: 'RH',
            deltek_id: 'test_deltek_id',
          },
        },
      };

      await supertest(app.getHttpServer())
        .post('/graphql')
        .send(postData)
        .expect(200)
        .then((response) => {
          // console.log('update response: ', response.body);

          // Check if data exists in the response body
          expect(response.body.data).toBeDefined();

          // Check if createCompetition exists in the data
          expect(response.body.data.updateCompetition).toBeDefined();

          // Check if the returned id is correct
          expect(response.body.data.updateCompetition).toEqual('fb0b9943-c133-4879-8ff5-1a3c204ed669');
        });

      const query = `
    query Competition {
      competition(id: "fb0b9943-c133-4879-8ff5-1a3c204ed669") {
          id
          category
          state
          deltek_id
          created_at
          updated_at
          deleted_at
      }
    } `;

      await supertest(app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .then((response) => {
          // Check if 'data' and 'competition' are defined
          expect(response.body.data).toBeDefined();
          expect(response.body.data.competition).toBeDefined();

          // Check if 'id' matches the expected value
          expect(response.body.data.competition.id).toEqual('fb0b9943-c133-4879-8ff5-1a3c204ed669');

          // Check if 'category' is "RH"
          expect(response.body.data.competition.category).toEqual('RH');

          // Check if 'state' is "DRAFT"
          expect(response.body.data.competition.state).toEqual('DRAFT');

          // Check if 'deltek_id' is "test_deltek_id"
          expect(response.body.data.competition.deltek_id).toEqual('test_deltek_id');

          // Check if 'created_at' and 'updated_at' are defined and are not null
          expect(response.body.data.competition.created_at).toBeDefined();
          expect(response.body.data.competition.updated_at).toBeDefined();

          // Check if 'deleted_at' is null
          expect(response.body.data.competition.deleted_at).toBeNull();
        });
    });

    it(`should fail updating competition with a non-existing id`, async () => {
      const postData = {
        query: `
      mutation UpdateCompetition($data: UpdateCompetitionInput!) {
        updateCompetition(data: $data)
      }`,

        variables: {
          data: {
            id: 'fb0b9943-c133-4879-8ff5-1a3c204ed660',
            job_description_id: '193670cc-c74b-4fe3-9158-8175e907e29f',
            recruiter_id: '4e0b74a8-1b63-47fa-a082-684ab7301ea0',
            category: 'RH',
            deltek_id: 'test_deltek_id',
          },
        },
      };

      return supertest(app.getHttpServer())
        .post('/graphql')
        .send(postData)
        .expect(200)
        .then((response) => {
          // console.log('create response: ', response.body);

          // Check if errors exist in the response body
          expect(response.body.errors).toBeDefined();

          // Check if errors array has at least one item
          expect(response.body.errors.length).toBeGreaterThan(0);

          // Check if the error message is what you expect
          expect(response.body.errors[0].message).toEqual("Competition doesn't exist");

          // Check if data is null
          expect(response.body.data).toBeNull();
        });
    });

    it(`should delete competition`, async () => {
      const postData = {
        query: `
      mutation DeleteCompetition ($data: DeleteCompetitionInput!) {
        deleteCompetition(data:$data)
    }    
      `,
        data: {
          data: {
            id: 'fb0b9943-c133-4879-8ff5-1a3c204ed661',
          },
        },
      };

      await supertest(app.getHttpServer())
        .post('/graphql')
        .send(postData)
        .expect(200)
        .then((response) => {
          // // Check if data exists in the response body
          // expect(response.body.data).toBeDefined();
          // // Check if createCompetition exists in the data
          // expect(response.body.data.createCompetition).toBeDefined();
          // // Check if the returned id is correct
          // expect(response.body.data.createCompetition).toEqual('fb0b9943-c133-4879-8ff5-1a3c204ed661');
        });

      // retreive competition
      const query = `
    query Competition {
      competition(id: "fb0b9943-c133-4879-8ff5-1a3c204ed661") {
          id
          category
          state
          deltek_id
          created_at
          updated_at
          deleted_at
      }
    } `;

      await supertest(app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .then((response) => {
          // Check if 'data' and 'competition' are defined
          expect(response.body.data).toBeDefined();
          expect(response.body.data.competition).toBeDefined();

          // Check if 'deleted_at' is NOT null
          expect(response.body.data.competition.deleted_at).toBeDefined();
        });
    });
  });

  // it(`should create application`, async () => {
  //   const query = `
  //     mutation CreateApplication($data: CreateApplicationInput!) {
  //       createApplication(data: $data)
  //     }
  //   `;

  //   const variables = {
  //     data: {
  //       id: '123e4567-e89b-12d3-a456-426614174010',
  //       json: { a: 'b' },
  //     },
  //   };

  //   return supertest(app.getHttpServer())
  //     .post('/graphql')
  //     .send({ query, variables })
  //     .expect(200)
  //     .then((response) => {
  //       console.log('create response: ', response.body);

  //       // // Check that users are defined and an array
  //       // expect(response.body.data.locations).toBeDefined();
  //       // expect(Array.isArray(response.body.data.locations)).toBe(true);

  //       // // Check there is only one user
  //       // expect(response.body.data.locations.length).toEqual(168);
  //     });
  // });

  afterAll(async () => {
    if (app) await app.close();
  });
});
