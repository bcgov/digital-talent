import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetJobDescriptionsQuery } from './get-job-descriptions.query';

@QueryHandler(GetJobDescriptionsQuery)
export class GetJobDescriptionsHandler implements IQueryHandler<GetJobDescriptionsQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetJobDescriptionsQuery): Promise<any> {
    return this.prisma.jobDescription.findMany({
      where: {
        deleted_at: null,
      },
    });
  }
}
