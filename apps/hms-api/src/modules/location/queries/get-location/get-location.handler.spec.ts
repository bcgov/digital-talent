import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetLocationQuery } from './get-location.query';
import { GetLocationHandler } from './get-location.handler';

describe('GetLocationHandler', () => {
  let handler: GetLocationHandler;
  let prismaService: any;

  beforeEach(async () => {
    prismaService = {
      location: {
        findUnique: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetLocationHandler,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    handler = module.get<GetLocationHandler>(GetLocationHandler);
  });

  it('should get a single location by ID', async () => {
    const id = 'some-uuid';
    const expectedResult = { id, name: 'Some Location' };
    (prismaService.location.findUnique as jest.Mock).mockResolvedValueOnce(expectedResult);

    const result = await handler.execute(new GetLocationQuery(id));
    expect(result).toBe(expectedResult);
    expect(prismaService.location.findUnique).toHaveBeenCalledWith({ where: { id } });
  });
});
