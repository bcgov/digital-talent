import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetJobDescriptionQuery } from './get-job-description.query';
import { GetJobDescriptionHandler } from './get-job-description.handler';

describe('GetJobDescriptionHandler', () => {
  let handler: GetJobDescriptionHandler;
  let prismaService: any;

  beforeEach(async () => {
    prismaService = {
      jobDescription: {
        findUnique: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetJobDescriptionHandler,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    handler = module.get<GetJobDescriptionHandler>(GetJobDescriptionHandler);
  });

  it('should get a single job-description by ID', async () => {
    const id = 'some-uuid';
    const expectedResult = { id, name: 'Some JobDescription' };
    (prismaService.jobDescription.findUnique as jest.Mock).mockResolvedValueOnce(expectedResult);

    const result = await handler.execute(new GetJobDescriptionQuery(id));
    expect(result).toBe(expectedResult);
    expect(prismaService.jobDescription.findUnique).toHaveBeenCalledWith({ where: { id } });
  });
});
