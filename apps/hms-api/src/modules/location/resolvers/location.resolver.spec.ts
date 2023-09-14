import { Test, TestingModule } from '@nestjs/testing';
import { QueryBus } from '@nestjs/cqrs';
import { PrismaService } from '../../prisma/prisma.service';
import { GetLocationsQuery } from '../queries/get-locations/get-locations.query';
import { GetLocationQuery } from '../queries/get-location/get-location.query';
import { LocationResolver } from './location.resolver';

describe('LocationResolver', () => {
  let resolver: LocationResolver;
  let queryBus: QueryBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocationResolver,
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

    resolver = module.get<LocationResolver>(LocationResolver);
    queryBus = module.get<QueryBus>(QueryBus);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('getLocations', () => {
    it('should get all locations', async () => {
      const expectedResult = [{ id: 'some-uuid', name: 'Some Location' }];
      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.getLocations()).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetLocationsQuery());
    });
  });

  describe('getLocation', () => {
    it('should get a single location by ID', async () => {
      const id = 'some-uuid';
      const expectedResult = { id, name: 'Some Location' };
      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.getLocation(id)).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetLocationQuery(id));
    });
  });
});
