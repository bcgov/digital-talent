import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetCompetitionsQuery } from './get-competitions.query';
import { GetCompetitionsHandler } from './get-competitions.handler';

describe('GetCompetitionsHandler', () => {
  let handler: GetCompetitionsHandler;
  let prismaService: any;

  beforeEach(async () => {
    prismaService = {
      competition: {
        findMany: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetCompetitionsHandler,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    handler = module.get<GetCompetitionsHandler>(GetCompetitionsHandler);
  });

  it('should get all competitions without a deletion date', async () => {
    const expectedResult = [{ id: 'some-uuid', name: 'Some Competition' }];
    (prismaService.competition.findMany as jest.Mock).mockResolvedValueOnce(expectedResult);

    const result = await handler.execute(new GetCompetitionsQuery());
    expect(result).toBe(expectedResult);
    expect(prismaService.competition.findMany).toHaveBeenCalledWith({ where: { deleted_at: null } });
  });
});
