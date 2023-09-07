import { Test, TestingModule } from '@nestjs/testing';
import { QueryBus } from '@nestjs/cqrs';
import { PrismaService } from '../../prisma/prisma.service';
import { GetUsersQuery } from '../queries/get-users/get-users.query';
import { GetUserQuery } from '../queries/get-user/get-user.query';
import { UserResolver } from './user.resolver';

describe('UserResolver', () => {
  let resolver: UserResolver;
  let queryBus: QueryBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
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

    resolver = module.get<UserResolver>(UserResolver);
    queryBus = module.get<QueryBus>(QueryBus);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('getUsers', () => {
    it('should get all users', async () => {
      const expectedResult = [{ id: 'some-uuid', name: 'Some User' }];
      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.getUsers()).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetUsersQuery());
    });
  });

  describe('getUser', () => {
    it('should get a single user by ID', async () => {
      const id = 'some-uuid';
      const expectedResult = { id, name: 'Some User' };
      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.getUser(id)).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetUserQuery(id));
    });
  });

  describe('getHiringManagers', () => {
    it('should get all hiring managers', async () => {
      const expectedResult = [{ id: 'some-uuid', name: 'Some User' }];
      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.getHiringManagers()).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(
        new GetUsersQuery({ where: { roles: { hasEvery: ['hiring-manager'] } } }),
      );
    });
  });

  describe('getRecruiters', () => {
    it('should get all recruiters', async () => {
      const expectedResult = [{ id: 'some-uuid', name: 'Some User' }];
      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.getRecruiters()).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(
        new GetUsersQuery({ where: { roles: { hasEvery: ['recruiter'] } } }),
      );
    });
  });
});
