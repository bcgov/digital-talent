import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetJobDescriptionQuery } from './get-job-description.query';

@QueryHandler(GetJobDescriptionQuery)
export class GetJobDescriptionHandler implements IQueryHandler<GetJobDescriptionQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetJobDescriptionQuery): Promise<any> {
    return this.prisma.jobDescription.findUnique({ where: { id: query.id } });
  }
}
