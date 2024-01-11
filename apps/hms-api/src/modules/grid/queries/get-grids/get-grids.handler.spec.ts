import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetGridsQuery } from './get-grids.query';
import { GetGridsHandler } from './get-grids.handler';

describe('GetGridsHandler', () => {
  let handler: GetGridsHandler;
  let prismaService: any;

  beforeEach(async () => {
    prismaService = {
      grid: {
        findMany: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetGridsHandler,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    handler = module.get<GetGridsHandler>(GetGridsHandler);
  });

  it('should get all grids without a deletion date', async () => {
    const expectedResult = [{ id: 'some-uuid', name: 'Some Grid' }];
    (prismaService.grid.findMany as jest.Mock).mockResolvedValueOnce(expectedResult);

    const result = await handler.execute(new GetGridsQuery());
    expect(result).toBe(expectedResult);
    expect(prismaService.grid.findMany).toHaveBeenCalledWith({ where: { deleted_at: null } });
  });
});
