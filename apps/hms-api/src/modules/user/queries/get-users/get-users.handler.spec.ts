import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetUsersQuery } from './get-users.query';
import { GetUsersHandler } from './get-users.handler';

describe('GetUsersHandler', () => {
  let handler: GetUsersHandler;
  let prismaService: any;

  beforeEach(async () => {
    prismaService = {
      user: {
        findMany: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetUsersHandler,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    handler = module.get<GetUsersHandler>(GetUsersHandler);
  });

  it('should get all users without a deletion date', async () => {
    const expectedResult = [{ id: 'some-uuid', name: 'Some User' }];
    (prismaService.user.findMany as jest.Mock).mockResolvedValueOnce(expectedResult);

    const result = await handler.execute(new GetUsersQuery({ where: null }));
    expect(result).toBe(expectedResult);
    expect(prismaService.user.findMany).toHaveBeenCalledWith({ where: { deleted_at: null } });
  });
});
