import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetApplicationLocationQuery } from './get-application-location.query';

@QueryHandler(GetApplicationLocationQuery)
export class GetApplicationLocationHandler implements IQueryHandler<GetApplicationLocationQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ application_id, location_id }: GetApplicationLocationQuery): Promise<any> {
    return this.prisma.applicationLocation.findUnique({
      where: {
        application_id_location_id: {
          application_id,
          location_id,
        },
      },
    });
  }
}
