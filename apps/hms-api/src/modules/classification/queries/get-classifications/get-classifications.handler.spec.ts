import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetClassificationsQuery } from './get-classifications.query';
import { GetClassificationsHandler } from './get-classifications.handler';

describe('GetClassificationsHandler', () => {
  let handler: GetClassificationsHandler;
  let prismaService: any;

  beforeEach(async () => {
    prismaService = {
      classification: {
        findMany: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetClassificationsHandler,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    handler = module.get<GetClassificationsHandler>(GetClassificationsHandler);
  });

  it('should get all classifications without a deletion date', async () => {
    const expectedResult = [{ id: 'some-uuid', name: 'Some Classification' }];
    (prismaService.classification.findMany as jest.Mock).mockResolvedValueOnce(expectedResult);

    const result = await handler.execute(new GetClassificationsQuery());
    expect(result).toBe(expectedResult);
    expect(prismaService.classification.findMany).toHaveBeenCalledWith({ where: { deleted_at: null } });
  });
});
