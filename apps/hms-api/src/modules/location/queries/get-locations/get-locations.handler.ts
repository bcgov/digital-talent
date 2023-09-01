import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetLocationsQuery } from './get-locations.query';

@QueryHandler(GetLocationsQuery)
export class GetLocationsHandler implements IQueryHandler<GetLocationsQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetLocationsQuery): Promise<any> {
    return this.prisma.location.findMany({
      where: {
        deleted_at: null,
      },
    });
  }
}
