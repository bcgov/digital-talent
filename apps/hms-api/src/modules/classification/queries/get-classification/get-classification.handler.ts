import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetClassificationQuery } from './get-classification.query';

@QueryHandler(GetClassificationQuery)
export class GetClassificationHandler implements IQueryHandler<GetClassificationQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetClassificationQuery): Promise<any> {
    return this.prisma.classification.findUnique({ where: { id: query.id } });
  }
}
