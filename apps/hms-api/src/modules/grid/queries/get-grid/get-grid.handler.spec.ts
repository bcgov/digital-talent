import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetGridQuery } from './get-grid.query';
import { GetGridHandler } from './get-grid.handler';

describe('GetGridHandler', () => {
  let handler: GetGridHandler;
  let prismaService: any;

  beforeEach(async () => {
    prismaService = {
      grid: {
        findUnique: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetGridHandler,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    handler = module.get<GetGridHandler>(GetGridHandler);
  });

  it('should get a single grid by ID', async () => {
    const id = 'some-uuid';
    const expectedResult = { id, name: 'Some Grid' };
    (prismaService.grid.findUnique as jest.Mock).mockResolvedValueOnce(expectedResult);

    const result = await handler.execute(new GetGridQuery(id));
    expect(result).toBe(expectedResult);
    expect(prismaService.grid.findUnique).toHaveBeenCalledWith({ where: { id } });
  });
});
