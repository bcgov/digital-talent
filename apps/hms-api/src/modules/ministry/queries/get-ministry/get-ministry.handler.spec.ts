import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetMinistryQuery } from './get-ministry.query';
import { GetMinistryHandler } from './get-ministry.handler';

describe('GetMinistryHandler', () => {
  let handler: GetMinistryHandler;
  let prismaService: any;

  beforeEach(async () => {
    prismaService = {
      ministry: {
        findUnique: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetMinistryHandler,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    handler = module.get<GetMinistryHandler>(GetMinistryHandler);
  });

  it('should get a single ministry by ID', async () => {
    const id = 'some-uuid';
    const expectedResult = { id, name: 'Some Ministry' };
    (prismaService.ministry.findUnique as jest.Mock).mockResolvedValueOnce(expectedResult);

    const result = await handler.execute(new GetMinistryQuery(id));
    expect(result).toBe(expectedResult);
    expect(prismaService.ministry.findUnique).toHaveBeenCalledWith({ where: { id } });
  });
});
