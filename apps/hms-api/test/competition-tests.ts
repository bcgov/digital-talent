// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import { pollUntilTrue, testContext } from './app.e2e-spec';

export const competitionTests = () => {
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
      return supertest(testContext.app.getHttpServer())
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
      await supertest(testContext.app.getHttpServer())
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
      await supertest(testContext.app.getHttpServer())
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
      await supertest(testContext.app.getHttpServer())
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
      await supertest(testContext.app.getHttpServer())
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
      await supertest(testContext.app.getHttpServer())
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
      await supertest(testContext.app.getHttpServer())
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
      await supertest(testContext.app.getHttpServer())
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
    it(`should update competition state`, async () => {
      const postData = {
        query: `
      mutation UpdateCompetitionState($data: UpdateCompetitionStateInput!) {
        updateCompetitionState(data: $data)
      }`,
        variables: {
          data: {
            id: 'fb0b9943-c133-4879-8ff5-1a3c204ed669',
            state: 'PUBLISHED',
          },
        },
      };
      await supertest(testContext.app.getHttpServer())
        .post('/graphql')
        .send(postData)
        .expect(200)
        .then((response) => {
          // console.log('update state response: ', response.body);
          // Check if data exists in the response body
          expect(response.body.data).toBeDefined();
          // Check if createCompetition exists in the data
          expect(response.body.data.updateCompetitionState).toBeDefined();
          // Check if the returned id is correct
          expect(response.body.data.updateCompetitionState).toEqual('fb0b9943-c133-4879-8ff5-1a3c204ed669');
        });

      await pollUntilTrue(async () => {
        const query = `
        query Competition {
          competition(id: "fb0b9943-c133-4879-8ff5-1a3c204ed669") {
              id
              state
          }
        }`;
        const response = await supertest(testContext.app.getHttpServer()).post('/graphql').send({ query });

        if (
          response.body.data &&
          response.body.data.competition &&
          response.body.data.competition.state === 'PUBLISHED'
        ) {
          // If conditions are met, validate them with assertions
          expect(response.body.data).toBeDefined();
          expect(response.body.data.competition).toBeDefined();
          expect(response.body.data.competition.id).toEqual('fb0b9943-c133-4879-8ff5-1a3c204ed669');
          expect(response.body.data.competition.state).toEqual('PUBLISHED');
          return true; // Return true to exit the polling
        }
        return false; // Keep polling
      });
    });
    it(`should resolve job description from competition`, async () => {
      // make another competition
      // retreive competition
      const query = `
      query Competition {
        competition(id: "fb0b9943-c133-4879-8ff5-1a3c204ed661") {
            job_description {
                id
                e_class_id
                name
                created_at
                updated_at
                deleted_at
            }
        }
    } `;
      await supertest(testContext.app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .then((response) => {
          // Check if 'data' and 'competition' are defined
          expect(response.body.data).toBeDefined();
          expect(response.body.data.competition).toBeDefined();
          expect(response.body.data.competition.job_description).toBeDefined();
          expect(response.body.data.competition.job_description.id).toEqual('09ab8e7d-9cc1-4993-8d53-14095dd00e81');
          expect(response.body.data.competition.job_description.name).toEqual('Full Stack Developer 27');
        });
    });
    it(`should resolve recruiter from competition`, async () => {
      // make another competition
      // retreive competition
      const query = `
        query Competition {
          competition(id: "fb0b9943-c133-4879-8ff5-1a3c204ed661") {
            recruiter {
              id
              deltek_id
              name
              email
              roles
              created_at
              updated_at
          }
        }
      } `;
      await supertest(testContext.app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .then((response) => {
          // Check if 'data' and 'competition' are defined
          expect(response.body.data).toBeDefined();
          expect(response.body.data.competition).toBeDefined();
          expect(response.body.data.competition.recruiter).toBeDefined();
          expect(response.body.data.competition.recruiter.id).toEqual('4e0b74a8-1b63-47fa-a082-684ab7301ea9');
          expect(response.body.data.competition.recruiter.name).toEqual('System User');
        });
    });
    it(`should resolve schedule from competition`, async () => {
      // create competition schedule first
      const postData = {
        query: `
        mutation CreateCompetitionSchedule ($data: CreateCompetitionScheduleInput!) {
          createCompetitionSchedule(data: $data)
        }`,
        variables: {
          data: {
            id: '123e4567-e89b-12d3-a456-426614174022',
            competition_id: 'fb0b9943-c133-4879-8ff5-1a3c204ed661',
            state: 'DRAFT',
            start_at: '2023-01-01',
            end_at: '2023-02-02',
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
          // Check if createCompetitionSchedule exists in the data
          expect(response.body.data.createCompetitionSchedule).toBeDefined();
          // Check if the returned id is correct
          expect(response.body.data.createCompetitionSchedule).toEqual('123e4567-e89b-12d3-a456-426614174022');
        });

      await pollUntilTrue(async () => {
        // retreive competition
        const query = `
          query Competition {
            competition(id: "fb0b9943-c133-4879-8ff5-1a3c204ed661") {
              schedule {
                id
                state
                start_at
                end_at
                created_at
                updated_at
                deleted_at
            }
          }
        } `;
        const response = await supertest(testContext.app.getHttpServer()).post('/graphql').send({ query });

        if (
          response.body.data &&
          response.body.data.competition &&
          response.body.data.competition.schedule &&
          response.body.data.competition.schedule.length > 0
        ) {
          // If conditions are met, validate them with assertions
          expect(
            response.body.data.competition.schedule[response.body.data.competition.schedule.length - 1].id,
          ).toEqual('123e4567-e89b-12d3-a456-426614174022');
          expect(
            response.body.data.competition.schedule[response.body.data.competition.schedule.length - 1].state,
          ).toEqual('DRAFT');
          return true; // Return true to exit the polling
        }
        return false; // Keep polling
      });
    });
    it(`should resolve competition skills from competition`, async () => {
      // create competition skill first
      const postData = {
        query: `
        mutation AddCompetitionSkill ($data: AddCompetitionSkillInput!) {
          addCompetitionSkill(data: $data)
        }`,
        variables: {
          data: {
            skill_id: '00583eba-5116-4ffc-b627-65aebf8d1e90',
            competition_id: 'fb0b9943-c133-4879-8ff5-1a3c204ed661',
            min_years_experience: 1,
            is_required: true,
          },
        },
      };
      await supertest(testContext.app.getHttpServer())
        .post('/graphql')
        .send(postData)
        .expect(200)
        .then((response) => {
          // console.log('response: ', response.body);
          // Check if data exists in the response body
          expect(response.body.data).toBeDefined();
          // Check if addCompetitionSkill exists in the data
          expect(response.body.data.addCompetitionSkill).toBeDefined();
          // Check if the returned id is correct
          expect(response.body.data.addCompetitionSkill).toEqual(
            'fb0b9943-c133-4879-8ff5-1a3c204ed661-00583eba-5116-4ffc-b627-65aebf8d1e90',
          );
        });

      await pollUntilTrue(async () => {
        // retreive competition
        const query = `
          query Competition {
            competition(id: "fb0b9943-c133-4879-8ff5-1a3c204ed661") {
              skills {
                competition_id
                skill_id
                min_years_experience
                is_required
            }
          }
        } `;
        const response = await supertest(testContext.app.getHttpServer()).post('/graphql').send({ query });

        if (
          response.body.data &&
          response.body.data.competition &&
          response.body.data.competition.skills &&
          response.body.data.competition.skills.length > 0
        ) {
          const indx = response.body.data.competition.skills.length - 1;
          // If conditions are met, validate them with assertions
          expect(response.body.data.competition.skills[indx].competition_id).toEqual(
            'fb0b9943-c133-4879-8ff5-1a3c204ed661',
          );
          expect(response.body.data.competition.skills[indx].skill_id).toEqual('00583eba-5116-4ffc-b627-65aebf8d1e90');
          expect(response.body.data.competition.skills[indx].min_years_experience).toEqual(1);
          expect(response.body.data.competition.skills[indx].is_required).toEqual(true);
          return true; // Return true to exit the polling
        }
        return false; // Keep polling
      });
    });
  });
};
