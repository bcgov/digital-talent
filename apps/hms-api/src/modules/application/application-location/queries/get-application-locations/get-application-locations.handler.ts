import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetApplicationLocationsQuery } from './get-application-locations.query';

@QueryHandler(GetApplicationLocationsQuery)
export class GetApplicationLocationsHandler implements IQueryHandler<GetApplicationLocationsQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ args: { where, orderBy, take, skip } = {} }: GetApplicationLocationsQuery): Promise<any> {
    return this.prisma.applicationLocation.findMany({
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
