import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetClassificationQuery } from './get-classification.query';
import { GetClassificationHandler } from './get-classification.handler';

describe('GetClassificationHandler', () => {
  let handler: GetClassificationHandler;
  let prismaService: any;

  beforeEach(async () => {
    prismaService = {
      classification: {
        findUnique: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetClassificationHandler,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    handler = module.get<GetClassificationHandler>(GetClassificationHandler);
  });

  it('should get a single classification by ID', async () => {
    const id = 'some-uuid';
    const expectedResult = { id, name: 'Some Classification' };
    (prismaService.classification.findUnique as jest.Mock).mockResolvedValueOnce(expectedResult);

    const result = await handler.execute(new GetClassificationQuery(id));
    expect(result).toBe(expectedResult);
    expect(prismaService.classification.findUnique).toHaveBeenCalledWith({ where: { id } });
  });
});
