import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetOpportunityLocationsQuery } from './get-opportunity-locations.query';

@QueryHandler(GetOpportunityLocationsQuery)
export class GetOpportunityLocationsHandler implements IQueryHandler<GetOpportunityLocationsQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ args: { where, orderBy, take, skip } = {} }: GetOpportunityLocationsQuery): Promise<any> {
    return this.prisma.opportunityLocation.findMany({
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
