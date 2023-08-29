import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetGridQuery } from './get-grid.query';

@QueryHandler(GetGridQuery)
export class GetGridHandler implements IQueryHandler<GetGridQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetGridQuery): Promise<any> {
    return this.prisma.grid.findUnique({
      where: {
        id: query.id,
      },
    });
  }
}
