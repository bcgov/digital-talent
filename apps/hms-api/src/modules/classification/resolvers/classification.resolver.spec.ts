import { EventStoreDBClient } from '@eventstore/db-client';
import { INestApplication } from '@nestjs/common';
import { CqrsModule, QueryBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import { GridCommandHandlers } from '../../grid/commands';
import { GridEventHandlers } from '../../grid/events';
import { GridQueryHandlers } from '../../grid/queries';
import { GetGridQuery } from '../../grid/queries/get-grid/get-grid.query';
import { OccupationGroupCommandHandlers } from '../../occupation-group/commands';
import { OccupationGroupEventHandlers } from '../../occupation-group/events';
import { OccupationGroupQueryHandlers } from '../../occupation-group/queries';
import { GetOccupationGroupQuery } from '../../occupation-group/queries/get-occupation-group/get-occupation-group.query';
import { PrismaService } from '../../prisma/prisma.service';
import { ClassificationCommandHandlers } from '../commands';
import { ClassificationEventHandlers } from '../events';
import { ClassificationModel } from '../models/classification.model';
import { ClassificationQueryHandlers } from '../queries';
import { GetClassificationQuery } from '../queries/get-classification/get-classification.query';
import { GetClassificationsQuery } from '../queries/get-classifications/get-classifications.query';
import { ClassificationResolver } from './classification.resolver';

describe('ClassificationResolver Integration Tests', () => {
  let resolver: ClassificationResolver;
  let mockPrismaService: Partial<PrismaService>;
  let mockEventStore: Partial<EventStoreDBClient>;
  let queryBus: QueryBus;
  let executeSpy: jest.SpyInstance;
  let app: INestApplication;

  afterEach(async () => {
    executeSpy.mockClear();
    if (app) await app.close();
  });

  beforeEach(async () => {
    // Mock PrismaService
    mockPrismaService = {
      classification: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
      },
      grid: { findUnique: jest.fn() },
      occupationGroup: { findUnique: jest.fn() },
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
        ...GridCommandHandlers,
        ...GridEventHandlers,
        ...GridQueryHandlers,
        ...OccupationGroupCommandHandlers,
        ...OccupationGroupEventHandlers,
        ...OccupationGroupQueryHandlers,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
        {
          provide: EventStoreDBClient,
          useValue: mockEventStore,
        },
      ],
    }).compile();

    resolver = module.get<ClassificationResolver>(ClassificationResolver);
    queryBus = module.get<QueryBus>(QueryBus);
    executeSpy = jest.spyOn(queryBus, 'execute');

    app = module.createNestApplication<INestApplication>();

    await app.init();
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should fetch classifications', async () => {
    const mockClassifications = [{ id: 'mockId1' }, { id: 'mockId2' }];
    (mockPrismaService.classification.findMany as jest.Mock).mockResolvedValueOnce(mockClassifications);

    const result = await resolver.getClassifications();

    expect(executeSpy).toHaveBeenCalledWith(new GetClassificationsQuery());
    expect(result).toEqual(mockClassifications);
  });

  it('should handle [] when fetching classifications', async () => {
    const mockClassifications = [];
    (mockPrismaService.classification.findMany as jest.Mock).mockResolvedValueOnce(mockClassifications);

    const result = await resolver.getClassifications();

    expect(result).toEqual(mockClassifications);
  });

  it('should fetch a single classification', async () => {
    const mockId = 'd290f1ee-6c54-4b01-90e6-d701748f0851';
    const mockClassification = { id: mockId };
    (mockPrismaService.classification.findUnique as jest.Mock).mockResolvedValueOnce(mockClassification);

    const result = await resolver.getClassification(mockId);

    expect(executeSpy).toHaveBeenCalledWith(new GetClassificationQuery(mockId));
    expect(result).toEqual(mockClassification);
  });

  it('should handle null when fetching a single classification', async () => {
    const mockId = 'd290f1ee-6c54-4b01-90e6-d701748f0851';
    const mockClassification = null;
    (mockPrismaService.classification.findUnique as jest.Mock).mockResolvedValueOnce(mockClassification);

    const result = await resolver.getClassification(mockId);

    expect(result).toEqual(mockClassification);
  });

  it('should resolve grid for a classification', async () => {
    const mockGrid = { id: 'mockId' };
    const mockClassification: ClassificationModel = {
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
    (mockPrismaService.grid.findUnique as jest.Mock).mockResolvedValueOnce(mockGrid);
    const result = await resolver.getGrid(mockClassification);

    expect(executeSpy).toHaveBeenCalledWith(new GetGridQuery(mockClassification.grid_id));
    expect(result).toEqual(mockGrid);
  });

  it('should handle null when resolving grid for a classification', async () => {
    const mockGrid = null;
    const mockClassification: ClassificationModel = {
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
    (mockPrismaService.grid.findUnique as jest.Mock).mockResolvedValueOnce(mockGrid);
    const result = await resolver.getGrid(mockClassification);

    expect(result).toEqual(mockGrid);
  });

  it('should occupation grid for a classification', async () => {
    const mockOccupationGrid = { id: 'mockId' };
    const mockClassification: ClassificationModel = {
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
    (mockPrismaService.occupationGroup.findUnique as jest.Mock).mockResolvedValueOnce(mockOccupationGrid);
    const result = await resolver.getOccupationGroup(mockClassification);

    expect(executeSpy).toHaveBeenCalledWith(new GetOccupationGroupQuery(mockClassification.occupation_group_id));
    expect(result).toEqual(mockOccupationGrid);
  });

  it('should handle null when resolving occupation group for a classification', async () => {
    const mockOccupationGrid = null;
    const mockClassification: ClassificationModel = {
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
    (mockPrismaService.occupationGroup.findUnique as jest.Mock).mockResolvedValueOnce(mockOccupationGrid);
    const result = await resolver.getOccupationGroup(mockClassification);

    expect(result).toEqual(mockOccupationGrid);
  });
});
