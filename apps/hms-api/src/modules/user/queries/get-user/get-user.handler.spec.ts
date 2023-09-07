import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetUserQuery } from './get-user.query';
import { GetUserHandler } from './get-user.handler';

describe('GetUserHandler', () => {
  let handler: GetUserHandler;
  let prismaService: any;

  beforeEach(async () => {
    prismaService = {
      user: {
        findUnique: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetUserHandler,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    handler = module.get<GetUserHandler>(GetUserHandler);
  });

  it('should get a single user by ID', async () => {
    const id = 'some-uuid';
    const expectedResult = { id, name: 'Some User' };
    (prismaService.user.findUnique as jest.Mock).mockResolvedValueOnce(expectedResult);

    const result = await handler.execute(new GetUserQuery(id));
    expect(result).toBe(expectedResult);
    expect(prismaService.user.findUnique).toHaveBeenCalledWith({ where: { id } });
  });
});
