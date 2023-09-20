import { EventStoreDBClient } from '@eventstore/db-client';
import { ModuleRef } from '@nestjs/core';
import { CqrsModule, QueryBus as NestQueryBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import { GetGridQuery } from '../../grid/queries/get-grid/get-grid.query';
import { OccupationGroupModel } from '../../occupation-group/models/occupation-group.model';
import { GetOccupationGroupQuery } from '../../occupation-group/queries/get-occupation-group/get-occupation-group.query';
import { PrismaService } from '../../prisma/prisma.service';
import { ClassificationCommandHandlers } from '../commands';
import { ClassificationEventHandlers } from '../events';
import { ClassificationModel } from '../models/classification.model';
import { ClassificationQueryHandlers } from '../queries';
import { GetClassificationHandler } from '../queries/get-classification/get-classification.handler';
import { GetClassificationQuery } from '../queries/get-classification/get-classification.query';
import { GetClassificationsQuery } from '../queries/get-classifications/get-classifications.query';
import { ClassificationResolver } from './classification.resolver';

describe('ClassificationResolver', () => {
  let resolver: ClassificationResolver;
  let queryBus: NestQueryBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClassificationResolver,
        {
          provide: NestQueryBus,
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
    queryBus = module.get<NestQueryBus>(NestQueryBus);
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

class CustomQueryBus extends NestQueryBus {
  constructor(private customModuleRef: ModuleRef) {
    super(customModuleRef);
  }

  execute(query): Promise<any> {
    if (query instanceof GetClassificationQuery) {
      const handler = this.customModuleRef.get(GetClassificationHandler, { strict: false });
      if (handler) {
        return handler.execute(query);
      }
    }
    // For other queries, fallback to the default behavior
    return super.execute(query);
  }
}

describe('ClassificationResolver Integration Tests', () => {
  let resolver: ClassificationResolver;
  let mockPrismaService: Partial<PrismaService>;
  let mockEventStore: Partial<EventStoreDBClient>;

  beforeEach(async () => {
    // Mock PrismaService
    mockPrismaService = {
      classification: {
        findUnique: jest.fn(),
        // ... add other necessary mocks
      },
    } as any;

    // Mock EventStoreDBClient's readStream
    mockEventStore = {
      readStream: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        ClassificationResolver,
        ...ClassificationCommandHandlers,
        ...ClassificationEventHandlers,
        ...ClassificationQueryHandlers,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
        {
          provide: EventStoreDBClient,
          useValue: mockEventStore,
        },
        {
          provide: NestQueryBus,
          useClass: CustomQueryBus,
        },
      ],
    }).compile();

    resolver = module.get<ClassificationResolver>(ClassificationResolver);
  });

  // it('should fetch classifications', async () => {
  //   // mock the return value for the necessary methods
  //   (mockEventStore.readStream as jest.Mock).mockReturnValueOnce([
  //     /* mocked event data */
  //   ]);

  //   const result = await resolver.getClassifications();

  //   expect(result).toBeDefined();
  //   // Add more assertions based on your expected return values.
  // });

  it('should fetch a single classification', async () => {
    const mockId = 'd290f1ee-6c54-4b01-90e6-d701748f0851';
    const mockClassification = { id: mockId };
    (mockPrismaService.classification.findUnique as jest.Mock).mockResolvedValueOnce(mockClassification);

    const result = await resolver.getClassification(mockId);

    expect(result).toEqual(mockClassification);
  });

  // it('should resolve grid for a classification', async () => {
  //   const mockClassification: ClassificationModel = {
  //     id: 'id',
  //     grid_id: 'gird_id',
  //     occupation_group_id: 'string',
  //     rate_adjustment: 0.123,
  //     grid: {
  //       id: 'id',
  //       name: 'name',
  //       steps: [],
  //       created_at: new Date(),
  //     },
  //     occupation_group: {
  //       id: 'id',
  //       code: 'code',
  //       name: 'name',
  //       created_at: new Date(),
  //     },
  //     created_at: new Date(),
  //   };

  //   (mockEventStore.readStream as jest.Mock).mockReturnValueOnce([
  //     /* mocked event data */
  //   ]);

  //   const result = await resolver.getGrid(mockClassification);

  //   expect(result).toBeDefined();
  //   // Add more assertions based on your expected return values.
  // });

  // it('should resolve occupation group for a classification', async () => {
  //   const mockClassification: ClassificationModel = {
  //     id: 'id',
  //     grid_id: 'gird_id',
  //     occupation_group_id: 'string',
  //     rate_adjustment: 0.123,
  //     grid: {
  //       id: 'id',
  //       name: 'name',
  //       steps: [],
  //       created_at: new Date(),
  //     },
  //     occupation_group: {
  //       id: 'id',
  //       code: 'code',
  //       name: 'name',
  //       created_at: new Date(),
  //     },
  //     created_at: new Date(),
  //   };

  //   (mockEventStore.readStream as jest.Mock).mockReturnValueOnce([
  //     /* mocked event data */
  //   ]);

  //   const result = await resolver.getOccupationGroup(mockClassification);

  //   expect(result).toBeDefined();
  //   // Add more assertions based on your expected return values.
  // });
});
