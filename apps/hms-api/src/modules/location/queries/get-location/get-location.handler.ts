import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetLocationQuery } from './get-location.query';

@QueryHandler(GetLocationQuery)
export class GetLocationHandler implements IQueryHandler<GetLocationQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetLocationQuery): Promise<any> {
    return this.prisma.location.findUnique({
      where: {
        id: query.id,
      },
    });
  }
}
