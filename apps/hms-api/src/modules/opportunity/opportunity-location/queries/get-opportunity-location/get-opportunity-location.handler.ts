import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetOpportunityLocationQuery } from './get-opportunity-location.query';

@QueryHandler(GetOpportunityLocationQuery)
export class GetOpportunityLocationHandler implements IQueryHandler<GetOpportunityLocationQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ opportunity_id, location_id }: GetOpportunityLocationQuery): Promise<any> {
    return this.prisma.opportunityLocation.findUnique({
      where: {
        opportunity_id_location_id: {
          opportunity_id,
          location_id,
        },
      },
    });
  }
}
