import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetOpportunitiesQuery } from './get-opportunities.query';

@QueryHandler(GetOpportunitiesQuery)
export class GetOpportunitiesHandler implements IQueryHandler<GetOpportunitiesQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ args: { where, orderBy, take, skip } }: GetOpportunitiesQuery): Promise<any> {
    return this.prisma.opportunity.findMany({
      where: {
        deleted_at: null,
        ...where,
      },
      orderBy,
      take,
      skip,
    });
  }
}
