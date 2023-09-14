import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetMinistriesQuery } from './get-ministries.query';
import { GetMinistriesHandler } from './get-ministries.handler';

describe('GetMinistriesHandler', () => {
  let handler: GetMinistriesHandler;
  let prismaService: any;

  beforeEach(async () => {
    prismaService = {
      ministry: {
        findMany: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetMinistriesHandler,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    handler = module.get<GetMinistriesHandler>(GetMinistriesHandler);
  });

  it('should get all ministries without a deletion date', async () => {
    const expectedResult = [{ id: 'some-uuid', name: 'Some Ministry' }];
    (prismaService.ministry.findMany as jest.Mock).mockResolvedValueOnce(expectedResult);

    const result = await handler.execute(new GetMinistriesQuery());
    expect(result).toBe(expectedResult);
    expect(prismaService.ministry.findMany).toHaveBeenCalledWith({ where: { deleted_at: null } });
  });
});
