import { QueryBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import { GetMinistriesQuery } from '../queries/get-ministries/get-ministries.query';
import { GetMinistryQuery } from '../queries/get-ministry/get-ministry.query';
import { MinistryResolver } from './ministry.resolver';

describe('MinistryResolver', () => {
  let resolver: MinistryResolver;
  let queryBus: QueryBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MinistryResolver,
        {
          provide: QueryBus,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<MinistryResolver>(MinistryResolver);
    queryBus = module.get<QueryBus>(QueryBus);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('getMinistries', () => {
    it('should get all ministries', async () => {
      const expectedResult = [{ id: 'some-uuid', name: 'Some Ministry' }];
      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.getMinistries()).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetMinistriesQuery());
    });
  });

  describe('getMinistry', () => {
    it('should get a single ministry by ID', async () => {
      const id = 'some-uuid';
      const expectedResult = { id, name: 'Some Ministry' };
      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.getMinistry(id)).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetMinistryQuery(id));
    });
  });
});
