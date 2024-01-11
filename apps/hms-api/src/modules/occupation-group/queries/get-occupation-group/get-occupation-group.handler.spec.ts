import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetOccupationGroupQuery } from './get-occupation-group.query';
import { GetOccupationGroupHandler } from './get-occupation-group.handler';

describe('GetOccupationGroupHandler', () => {
  let handler: GetOccupationGroupHandler;
  let prismaService: any;

  beforeEach(async () => {
    prismaService = {
      occupationGroup: {
        findUnique: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetOccupationGroupHandler,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    handler = module.get<GetOccupationGroupHandler>(GetOccupationGroupHandler);
  });

  it('should get a single occupation-group by ID', async () => {
    const id = 'some-uuid';
    const expectedResult = { id, name: 'Some OccupationGroup' };
    (prismaService.occupationGroup.findUnique as jest.Mock).mockResolvedValueOnce(expectedResult);

    const result = await handler.execute(new GetOccupationGroupQuery(id));
    expect(result).toBe(expectedResult);
    expect(prismaService.occupationGroup.findUnique).toHaveBeenCalledWith({ where: { id } });
  });
});
