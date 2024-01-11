// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import { testContext } from './app.e2e-spec';

export const seedTests = () => {
  describe('Seed tests', () => {
    it(`should have system admin user`, async () => {
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

      return supertest(testContext.app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .then((response) => {
          // Check that users are defined and an array
          expect(response.body.data.users).toBeDefined();
          expect(Array.isArray(response.body.data.users)).toBe(true);

          // Check there is only one user
          // expect(response.body.data.users.length).toEqual(1);

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

      return supertest(testContext.app.getHttpServer())
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

      return supertest(testContext.app.getHttpServer())
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

      return supertest(testContext.app.getHttpServer())
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

      return supertest(testContext.app.getHttpServer())
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

      return supertest(testContext.app.getHttpServer())
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

      return supertest(testContext.app.getHttpServer())
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

      return supertest(testContext.app.getHttpServer())
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
};
