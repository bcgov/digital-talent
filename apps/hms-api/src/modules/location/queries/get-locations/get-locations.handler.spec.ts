import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetLocationsQuery } from './get-locations.query';
import { GetLocationsHandler } from './get-locations.handler';

describe('GetLocationsHandler', () => {
  let handler: GetLocationsHandler;
  let prismaService: any;

  beforeEach(async () => {
    prismaService = {
      location: {
        findMany: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetLocationsHandler,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    handler = module.get<GetLocationsHandler>(GetLocationsHandler);
  });

  it('should get all locations without a deletion date', async () => {
    const expectedResult = [{ id: 'some-uuid', name: 'Some Location' }];
    (prismaService.location.findMany as jest.Mock).mockResolvedValueOnce(expectedResult);

    const result = await handler.execute(new GetLocationsQuery());
    expect(result).toBe(expectedResult);
    expect(prismaService.location.findMany).toHaveBeenCalledWith({ where: { deleted_at: null } });
  });
});
