import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetOccupationGroupQuery } from './get-occupation-group.query';

@QueryHandler(GetOccupationGroupQuery)
export class GetOccupationGroupHandler implements IQueryHandler<GetOccupationGroupQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetOccupationGroupQuery): Promise<any> {
    return this.prisma.occupationGroup.findUnique({
      where: {
        id: query.id,
      },
    });
  }
}
