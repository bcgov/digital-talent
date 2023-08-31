import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetOccupationGroupsQuery } from './get-occupation-groups.query';

@QueryHandler(GetOccupationGroupsQuery)
export class GetOccupationGroupsHandler implements IQueryHandler<GetOccupationGroupsQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetOccupationGroupsQuery): Promise<any> {
    return this.prisma.occupationGroup.findMany({
      where: {
        deleted_at: null,
      },
    });
  }
}
