import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetClassificationsQuery } from './get-classifications.query';

@QueryHandler(GetClassificationsQuery)
export class GetClassificationsHandler implements IQueryHandler<GetClassificationsQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetClassificationsQuery): Promise<any> {
    return this.prisma.classification.findMany({
      where: {
        deleted_at: null,
      },
    });
  }
}
