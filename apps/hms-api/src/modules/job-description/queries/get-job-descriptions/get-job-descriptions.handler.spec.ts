import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetJobDescriptionsQuery } from './get-job-descriptions.query';
import { GetJobDescriptionsHandler } from './get-job-descriptions.handler';

describe('GetJobDescriptionsHandler', () => {
  let handler: GetJobDescriptionsHandler;
  let prismaService: any;

  beforeEach(async () => {
    prismaService = {
      jobDescription: {
        findMany: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetJobDescriptionsHandler,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    handler = module.get<GetJobDescriptionsHandler>(GetJobDescriptionsHandler);
  });

  it('should get all job-descriptions without a deletion date', async () => {
    const expectedResult = [{ id: 'some-uuid', name: 'Some JobDescription' }];
    (prismaService.jobDescription.findMany as jest.Mock).mockResolvedValueOnce(expectedResult);

    const result = await handler.execute(new GetJobDescriptionsQuery());
    expect(result).toBe(expectedResult);
    expect(prismaService.jobDescription.findMany).toHaveBeenCalledWith({ where: { deleted_at: null } });
  });
});
