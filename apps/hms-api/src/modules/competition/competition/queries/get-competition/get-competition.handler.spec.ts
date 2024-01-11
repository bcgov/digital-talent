import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetCompetitionQuery } from './get-competition.query';
import { GetCompetitionHandler } from './get-competition.handler';

describe('GetCompetitionHandler', () => {
  let handler: GetCompetitionHandler;
  let prismaService: any;

  beforeEach(async () => {
    prismaService = {
      competition: {
        findUniqueOrThrow: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetCompetitionHandler,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    handler = module.get<GetCompetitionHandler>(GetCompetitionHandler);
  });

  it('should get a single competition by ID', async () => {
    const id = 'some-uuid';
    const expectedResult = { id, name: 'Some Competition' };
    (prismaService.competition.findUniqueOrThrow as jest.Mock).mockResolvedValueOnce(expectedResult);

    const result = await handler.execute(new GetCompetitionQuery(id));
    expect(result).toBe(expectedResult);
    expect(prismaService.competition.findUniqueOrThrow).toHaveBeenCalledWith({ where: { id } });
  });
});
