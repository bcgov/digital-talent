// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import { v4 as uuidv4 } from 'uuid';
import { pollUntilTrue, testContext } from './app.e2e-spec';

export const applicationTests = () => {
  describe('Application tests', () => {
    const applicationId = uuidv4();

    it(`should create application`, async () => {
      const postData = {
        query: `
      mutation CreateApplication($data: CreateApplicationInput!) {
        createApplication(data: $data)
      }`,
        variables: {
          data: {
            id: applicationId,
            applicant_id: '4e0b74a8-1b63-47fa-a082-684ab7301ea9',
            json: { test: 'a', test2: 2 },
          },
        },
      };
      return supertest(testContext.app.getHttpServer())
        .post('/graphql')
        .send(postData)
        .expect(200)
        .then((response) => {
          // Check if data exists in the response body
          expect(response.body.data).toBeDefined();
          // Check if createCompetition exists in the data
          expect(response.body.data.createApplication).toBeDefined();
          // Check if the returned id is correct
          expect(response.body.data.createApplication).toEqual(applicationId);
        });
    });

    it(`should fail creating application with existing id`, async () => {
      const postData = {
        query: `
        mutation CreateApplication($data: CreateApplicationInput!) {
          createApplication(data: $data)
        }`,
        variables: {
          data: {
            id: applicationId,
            applicant_id: '4e0b74a8-1b63-47fa-a082-684ab7301ea9',
            json: { test: 'a', test2: 2 },
          },
        },
      };
      return supertest(testContext.app.getHttpServer())
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
          expect(response.body.errors[0].message).toEqual('Application already exists');
          // Check if data is null
          expect(response.body.data).toBeNull();
        });
    });

    it(`should get application by id`, async () => {
      // retreive competition
      const query = `
        query Application {
          application(id: "${applicationId}") {
            id
            applicant_id
            created_at
            updated_at
            deleted_at
            json
          }
        } `;
      await supertest(testContext.app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .then((response) => {
          // Check if 'data' and 'application' are defined
          expect(response.body.data).toBeDefined();
          expect(response.body.data.application).toBeDefined();
          expect(response.body.data.application.id).toEqual(applicationId);
          expect(response.body.data.application.json).toEqual({ test: 'a', test2: 2 });
          expect(response.body.data.application.applicant_id).toEqual('4e0b74a8-1b63-47fa-a082-684ab7301ea9');
        });
    });

    it(`should get all applications`, async () => {
      // retreive competition
      const query = `
        query Applications {
          applications {
            id
            applicant_id
            created_at
            updated_at
            deleted_at
            json
          }
        }
        `;
      await supertest(testContext.app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .then((response) => {
          // Check if 'data' and 'competition' are defined
          expect(response.body.data).toBeDefined();
          expect(response.body.data.applications).toBeDefined();
          expect(response.body.data.applications.length > 0).toEqual(true);
        });
    });

    it(`should update an existing application`, async () => {
      const postData = {
        query: `
      mutation UpdateApplication($data: UpdateApplicationInput!) {
        updateApplication(data: $data)
      }`,
        variables: {
          data: {
            id: applicationId,
            applicant_id: '4e0b74a8-1b63-47fa-a082-684ab7301ea0',
            json: { test: 'b', test2: 3 },
          },
        },
      };
      await supertest(testContext.app.getHttpServer())
        .post('/graphql')
        .send(postData)
        .expect(200)
        .then((response) => {
          // console.log('update response: ', response.body);
          // Check if data exists in the response body
          expect(response.body.data).toBeDefined();
          // Check if createCompetition exists in the data
          expect(response.body.data.updateApplication).toBeDefined();
          // Check if the returned id is correct
          expect(response.body.data.updateApplication).toEqual(applicationId);
        });

      await pollUntilTrue(async () => {
        const query = `
          query Application {
            application(id: "${applicationId}") {
              id
              applicant_id
              created_at
              updated_at
              deleted_at
              json
            }
          } `;
        const response = await supertest(testContext.app.getHttpServer()).post('/graphql').send({ query });

        if (
          response.body.data &&
          response.body.data.application &&
          response.body.data.application.applicant_id === '4e0b74a8-1b63-47fa-a082-684ab7301ea0'
        ) {
          expect(response.body.data.application.id).toEqual(applicationId);
          expect(response.body.data.application.applicant_id).toEqual('4e0b74a8-1b63-47fa-a082-684ab7301ea0');
          expect(response.body.data.application.created_at).toBeDefined();
          expect(response.body.data.application.updated_at).toBeDefined();
          expect(response.body.data.application.deleted_at).toBeNull();
          return true; // Return true to exit the polling
        }
        return false; // Keep polling
      });
    });

    it(`should filter all applications`, async () => {
      // create more competitions
      const appId1 = uuidv4();
      let postData = {
        query: `
          mutation CreateApplication($data: CreateApplicationInput!) {
            createApplication(data: $data)
        }`,
        variables: {
          data: {
            id: appId1,
            applicant_id: '4e0b74a8-1b63-47fa-a082-684ab7301ea9',
            json: { test: 'bb', test2: 33 },
          },
        },
      };
      await supertest(testContext.app.getHttpServer())
        .post('/graphql')
        .send(postData)
        .expect(200)
        .then((response) => {
          // Check if data exists in the response body
          expect(response.body.data).toBeDefined();
          // Check if createCompetition exists in the data
          expect(response.body.data.createApplication).toBeDefined();
          // Check if the returned id is correct
          expect(response.body.data.createApplication).toEqual(appId1);
        });

      const appId2 = uuidv4();
      postData = {
        query: `
            mutation CreateApplication($data: CreateApplicationInput!) {
              createApplication(data: $data)
          }`,
        variables: {
          data: {
            id: appId2,
            applicant_id: '4e0b74a8-1b63-47fa-a082-684ab7301ea9',
            json: { test: 'bb', test2: 34 },
          },
        },
      };
      await supertest(testContext.app.getHttpServer())
        .post('/graphql')
        .send(postData)
        .expect(200)
        .then((response) => {
          // Check if data exists in the response body
          expect(response.body.data).toBeDefined();
          // Check if createCompetition exists in the data
          expect(response.body.data.createApplication).toBeDefined();
          // Check if the returned id is correct
          expect(response.body.data.createApplication).toEqual(appId2);
        });

      // make sure the new entries exists
      await pollUntilTrue(async () => {
        const query = `
          query Applications {
            applications {
              id
              applicant_id
              created_at
              updated_at
              deleted_at
              json
            }
          }`;
        const response = await supertest(testContext.app.getHttpServer()).post('/graphql').send({ query });

        if (response.body.data && response.body.data.applications && response.body.data.applications.length === 3) {
          return true; // Return true to exit the polling
        }
        return false; // Keep polling
      });

      // check where equals
      let query = `
          query Applications {
            applications(where: { applicant_id: { equals: "4e0b74a8-1b63-47fa-a082-684ab7301ea0" } }) {
                id
                applicant_id
                created_at
                updated_at
                deleted_at
                json
            }
        }
        `;
      await supertest(testContext.app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .then((response) => {
          expect(response.body.data).toBeDefined();
          expect(response.body.data.applications).toBeDefined();
          expect(response.body.data.applications.length === 1).toEqual(true);
        });

      // check take
      query = `
          query Applications {
            applications(take: 1) {
                id
                applicant_id
                created_at
                updated_at
                deleted_at
                json
            }
        }
        `;
      await supertest(testContext.app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .then((response) => {
          expect(response.body.data).toBeDefined();
          expect(response.body.data.applications).toBeDefined();
          expect(response.body.data.applications.length === 1).toEqual(true);
        });

      // check take
      query = `
      query Applications {
        applications(skip: 1) {
            id
            applicant_id
            created_at
            updated_at
            deleted_at
            json
        }
    }
    `;
      await supertest(testContext.app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .then((response) => {
          expect(response.body.data).toBeDefined();
          expect(response.body.data.applications).toBeDefined();
          expect(response.body.data.applications.length === 2).toEqual(true);
        });

      // check order by
      query = `
      query Applications {
        applications(orderBy: { created_at: asc }) {
            id
            applicant_id
            created_at
            updated_at
            deleted_at
            json
        }
    }
    `;
      await supertest(testContext.app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .then((response) => {
          expect(response.body.data).toBeDefined();
          expect(response.body.data.applications).toBeDefined();
          expect(response.body.data.applications.length === 3).toEqual(true);
          expect(response.body.data.applications[0].id).toEqual(applicationId);
          expect(response.body.data.applications[1].id).toEqual(appId1);
          expect(response.body.data.applications[2].id).toEqual(appId2);
        });
    });

    it(`should delete application`, async () => {
      const postData = {
        query: `
        mutation DeleteApplication {
          deleteApplication(id: "${applicationId}")
      }
      `,
      };
      await supertest(testContext.app.getHttpServer())
        .post('/graphql')
        .send(postData)
        .expect(200)
        .then((response) => {
          // // Check if data exists in the response body
          expect(response.body.data).toBeDefined();
          // // Check if createCompetition exists in the data
          expect(response.body.data.deleteApplication).toBeDefined();
          // // Check if the returned id is correct
          expect(response.body.data.deleteApplication).toEqual(applicationId);
        });

      await pollUntilTrue(async () => {
        const query = `
            query Application {
              application(id: "${applicationId}") {
                id
                applicant_id
                created_at
                updated_at
                deleted_at
                json
              }
            } `;
        const response = await supertest(testContext.app.getHttpServer()).post('/graphql').send({ query });

        if (response.body.data && response.body.data.application && response.body.data.application.deleted_at != null) {
          return true; // Return true to exit the polling
        }
        return false; // Keep polling
      });
    });
  });
};
