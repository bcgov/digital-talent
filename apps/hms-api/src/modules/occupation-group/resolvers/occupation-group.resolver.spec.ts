import { Test, TestingModule } from '@nestjs/testing';
import { QueryBus } from '@nestjs/cqrs';
import { PrismaService } from '../../prisma/prisma.service';
import { GetOccupationGroupsQuery } from '../queries/get-occupation-groups/get-occupation-groups.query';
import { GetOccupationGroupQuery } from '../queries/get-occupation-group/get-occupation-group.query';
import { OccupationGroupResolver } from './occupation-group.resolver';

describe('OccupationGroupResolver', () => {
  let resolver: OccupationGroupResolver;
  let queryBus: QueryBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OccupationGroupResolver,
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

    resolver = module.get<OccupationGroupResolver>(OccupationGroupResolver);
    queryBus = module.get<QueryBus>(QueryBus);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('getOccupationGroups', () => {
    it('should get all occupation-groups', async () => {
      const expectedResult = [{ id: 'some-uuid', name: 'Some OccupationGroup' }];
      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.getOccupationGroups()).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetOccupationGroupsQuery());
    });
  });

  describe('getOccupationGroup', () => {
    it('should get a single occupation-group by ID', async () => {
      const id = 'some-uuid';
      const expectedResult = { id, name: 'Some OccupationGroup' };
      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.getOccupationGroup(id)).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetOccupationGroupQuery(id));
    });
  });
});
