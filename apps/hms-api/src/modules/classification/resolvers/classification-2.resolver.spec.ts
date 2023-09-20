import { EventStoreDBClient } from '@eventstore/db-client';
import { INestApplication } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../prisma/prisma.service';
import { ClassificationCommandHandlers } from '../commands';
import { ClassificationEventHandlers } from '../events';
import { ClassificationQueryHandlers } from '../queries';
import { ClassificationResolver } from './classification.resolver';

describe("Sid's ClassificationResolver Tests", () => {
  let resolver: ClassificationResolver;
  let mockPrismaService: Partial<PrismaService>;
  let mockEventStore: Partial<EventStoreDBClient>;
  let app: INestApplication;

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
          provide: EventStoreDBClient,
          useValue: mockEventStore,
        },
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    resolver = module.get<ClassificationResolver>(ClassificationResolver);
    app = module.createNestApplication<INestApplication>();

    await app.init();
  });

  afterEach(async () => {
    if (app) await app.close();
  });

  it('should fetch a single classification', async () => {
    const mockId = '8bd6473a-a535-4521-ac06-9b61e4b433cb';
    const mockClassification = { id: mockId };
    (mockPrismaService.classification.findUnique as jest.Mock).mockResolvedValueOnce(mockClassification);

    const result = await resolver.getClassification(mockId);

    expect(result).toEqual(mockClassification);
  });
});
