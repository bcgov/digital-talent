import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetOccupationGroupsQuery } from './get-occupation-groups.query';
import { GetOccupationGroupsHandler } from './get-occupation-groups.handler';

describe('GetOccupationGroupsHandler', () => {
  let handler: GetOccupationGroupsHandler;
  let prismaService: any;

  beforeEach(async () => {
    prismaService = {
      occupationGroup: {
        findMany: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetOccupationGroupsHandler,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    handler = module.get<GetOccupationGroupsHandler>(GetOccupationGroupsHandler);
  });

  it('should get all occupation-groups without a deletion date', async () => {
    const expectedResult = [{ id: 'some-uuid', name: 'Some OccupationGroup' }];
    (prismaService.occupationGroup.findMany as jest.Mock).mockResolvedValueOnce(expectedResult);

    const result = await handler.execute(new GetOccupationGroupsQuery());
    expect(result).toBe(expectedResult);
    expect(prismaService.occupationGroup.findMany).toHaveBeenCalledWith({ where: { deleted_at: null } });
  });
});
