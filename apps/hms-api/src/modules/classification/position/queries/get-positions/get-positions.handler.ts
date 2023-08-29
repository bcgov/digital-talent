import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetPositionsQuery } from './get-positions.query';

@QueryHandler(GetPositionsQuery)
export class GetPositionsHandler implements IQueryHandler<GetPositionsQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetPositionsQuery): Promise<any> {
    return this.prisma.position.findMany({
      where: {
        deleted_at: null,
      },
    });
  }
}
