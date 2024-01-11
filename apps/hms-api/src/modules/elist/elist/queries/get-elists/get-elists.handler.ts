import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetElistsQuery } from './get-elists.query';

@QueryHandler(GetElistsQuery)
export class GetElistsHandler implements IQueryHandler<GetElistsQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ args: { where, orderBy, take, skip } }: GetElistsQuery): Promise<any> {
    return this.prisma.elist.findMany({
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
