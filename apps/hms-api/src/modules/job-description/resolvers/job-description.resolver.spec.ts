import { Test, TestingModule } from '@nestjs/testing';
import { QueryBus } from '@nestjs/cqrs';
import { GetClassificationQuery } from '../../classification/queries/get-classification/get-classification.query';
import { PrismaService } from '../../prisma/prisma.service';
import { GetJobDescriptionsQuery } from '../queries/get-job-descriptions/get-job-descriptions.query';
import { GetJobDescriptionQuery } from '../queries/get-job-description/get-job-description.query';
import { JobDescriptionResolver } from './job-description.resolver';
import { JobDescriptionModel } from '../models/job-description.model';

describe('JobDescriptionResolver', () => {
  let resolver: JobDescriptionResolver;
  let queryBus: QueryBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JobDescriptionResolver,
        {
          provide: QueryBus,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: PrismaService, // This mock provides the PrismaService in the testing context.
          useValue: {
            // Mock any methods of PrismaService that are used in your services.
            // If none of the methods are used directly in this test, you can leave it as an empty object.
          },
        },
      ],
    }).compile();

    resolver = module.get<JobDescriptionResolver>(JobDescriptionResolver);
    queryBus = module.get<QueryBus>(QueryBus);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('jobDescriptions', () => {
    it('should get all job-descriptions', async () => {
      const expectedResult = [{ id: 'some-uuid', name: 'Some JobDescription' }];
      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.jobDescriptions()).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetJobDescriptionsQuery());
    });
  });

  describe('jobDescription', () => {
    it('should get a single job-description by ID', async () => {
      const id = 'some-uuid';
      const expectedResult = { id, name: 'Some JobDescription' };
      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.jobDescription(id)).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetJobDescriptionQuery(id));
    });
  });

  describe('getClassification', () => {
    it('should get the classification of a job-description based on its classification_id', async () => {
      const jobDescription = new JobDescriptionModel();
      jobDescription.id = 'some-uuid';
      jobDescription.classification_id = 'some-classification-uuid';

      const expectedClassification = {
        id: 'some-classification-uuid',
      };

      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedClassification);

      expect(await resolver.getClassification(jobDescription)).toBe(expectedClassification);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetClassificationQuery(jobDescription.classification_id));
    });
  });
});
