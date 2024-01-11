import { Test, TestingModule } from '@nestjs/testing';
import { QueryBus } from '@nestjs/cqrs';
import { PrismaService } from '../../prisma/prisma.service';
import { GetGridsQuery } from '../queries/get-grids/get-grids.query';
import { GetGridQuery } from '../queries/get-grid/get-grid.query';
import { GridResolver } from './grid.resolver';

describe('GridResolver', () => {
  let resolver: GridResolver;
  let queryBus: QueryBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GridResolver,
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

    resolver = module.get<GridResolver>(GridResolver);
    queryBus = module.get<QueryBus>(QueryBus);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('getGrids', () => {
    it('should get all grids', async () => {
      const expectedResult = [{ id: 'some-uuid', name: 'Some Grid' }];
      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.getGrids()).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetGridsQuery());
    });
  });

  describe('getGrid', () => {
    it('should get a single grid by ID', async () => {
      const id = 'some-uuid';
      const expectedResult = { id, name: 'Some Grid' };
      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.getGrid(id)).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetGridQuery(id));
    });
  });
});
