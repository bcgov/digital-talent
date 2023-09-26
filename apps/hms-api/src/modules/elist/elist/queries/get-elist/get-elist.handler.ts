import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetElistQuery } from './get-elist.query';

@QueryHandler(GetElistQuery)
export class GetElistHandler implements IQueryHandler<GetElistQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetElistQuery): Promise<any> {
    return this.prisma.elist.findUnique({
      where: {
        id: query.id,
      },
    });
  }
}
