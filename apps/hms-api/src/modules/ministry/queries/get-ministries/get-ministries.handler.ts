import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetMinistriesQuery } from './get-ministries.query';

@QueryHandler(GetMinistriesQuery)
export class GetMinistriesHandler implements IQueryHandler<GetMinistriesQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetMinistriesQuery): Promise<any> {
    return this.prisma.ministry.findMany({
      where: {
        deleted_at: null,
      },
    });
  }
}
