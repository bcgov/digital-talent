// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { EventStoreDBClient } from '@eventstore/db-client';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { INestApplication } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { QueryBus } from '@nestjs/cqrs';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../prisma/prisma.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ClassificationResolver } from './classification.resolver';

describe('hallo', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let resolver: ClassificationResolver;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let mockPrismaService: Partial<PrismaService>;
  let mockEventStore: Partial<EventStoreDBClient>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let queryBus: QueryBus;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let executeSpy: jest.SpyInstance;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let app: INestApplication;

  // console.log('process.env 1: ', process.env);

  beforeAll(async () => {
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

    // dotenv.config({ path: path.resolve('.env.test') });

    // eslint-disable-next-line no-console
    console.log('process.env: ', JSON.stringify(process.env));

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env.test' })],
      providers: [
        // PrismaService,
        {
          provide: EventStoreDBClient,
          useValue: mockEventStore,
        },
      ],
    }).compile();

    // eslint-disable-next-line no-console
    console.log('process.env2: ', JSON.stringify(process.env));

    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const prismaService = module.get<PrismaService>(PrismaService);
    // // resolver = module.get<ClassificationResolver>(ClassificationResolver);
    // app = module.createNestApplication<INestApplication>();

    // await app.init();
  });
  it('oy', () => {
    // console.log('process.env: ', process.env);
  });
});
