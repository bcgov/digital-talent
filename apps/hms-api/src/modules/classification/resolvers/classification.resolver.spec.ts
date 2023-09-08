import { Test, TestingModule } from '@nestjs/testing';
import { QueryBus } from '@nestjs/cqrs';
import { PrismaService } from '../../prisma/prisma.service';
import { GetClassificationsQuery } from '../queries/get-classifications/get-classifications.query';
import { ClassificationResolver } from './classification.resolver';
import { GetClassificationQuery } from '../queries/get-classification/get-classification.query';
import { ClassificationModel } from '../models/classification.model';
import { OccupationGroupModel } from '../../occupation-group/models/occupation-group.model';
import { GetGridQuery } from '../../grid/queries/get-grid/get-grid.query';
import { GetOccupationGroupQuery } from '../../occupation-group/queries/get-occupation-group/get-occupation-group.query';

describe('ClassificationResolver', () => {
  let resolver: ClassificationResolver;
  let queryBus: QueryBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClassificationResolver,
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

    resolver = module.get<ClassificationResolver>(ClassificationResolver);
    queryBus = module.get<QueryBus>(QueryBus);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('getClassifications', () => {
    it('should get all classifications', async () => {
      const expectedResult = [{ id: 'some-uuid', name: 'Some Classification' }];
      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.getClassifications()).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetClassificationsQuery());
    });
  });

  describe('getClassification', () => {
    it('should get a single classification by ID', async () => {
      const id = 'some-uuid';
      const expectedResult = { id, name: 'Some Classification' };
      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.getClassification(id)).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetClassificationQuery(id));
    });
  });

  describe('getGrid', () => {
    it('should get grid by grid id', async () => {
      const inpt: ClassificationModel = {
        id: 'id',
        grid_id: 'gird_id',
        occupation_group_id: 'string',
        rate_adjustment: 0.123,
        grid: {
          id: 'id',
          name: 'name',
          steps: [],
          created_at: new Date(),
        },
        occupation_group: {
          id: 'id',
          code: 'code',
          name: 'name',
          created_at: new Date(),
        },
        created_at: new Date(),
      };

      const expectedResult = { result: 'expected' };

      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.getGrid(inpt)).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetGridQuery(inpt.grid_id));
    });
  });

  describe('getOccupationGroup', () => {
    it('should get an occupation group associated with a classification', async () => {
      const inpt: ClassificationModel = {
        id: 'id',
        grid_id: 'gird_id',
        occupation_group_id: 'string',
        rate_adjustment: 0.123,
        grid: {
          id: 'id',
          name: 'name',
          steps: [],
          created_at: new Date(),
        },
        occupation_group: {
          id: 'id',
          code: 'code',
          name: 'name',
          created_at: new Date(),
        },
        created_at: new Date(),
      };

      const expectedResult: OccupationGroupModel = {
        id: 'occupation-group-uuid',
        code: 'some-code',
        name: 'Some Occupation Group',
        created_at: new Date(),
      };

      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.getOccupationGroup(inpt)).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetOccupationGroupQuery(inpt.occupation_group_id));
    });
  });
});
