import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetGridsQuery } from './get-grids.query';

@QueryHandler(GetGridsQuery)
export class GetGridsHandler implements IQueryHandler<GetGridsQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetGridsQuery): Promise<any> {
    return this.prisma.grid.findMany({
      where: {
        deleted_at: null,
      },
    });
  }
}
