import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetOpportunityQuery } from './get-opportunity.query';

@QueryHandler(GetOpportunityQuery)
export class GetOpportunityHandler implements IQueryHandler<GetOpportunityQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetOpportunityQuery): Promise<any> {
    return this.prisma.opportunity.findUnique({
      where: {
        id: query.id,
      },
    });
  }
}
