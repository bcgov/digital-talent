import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetCompetitionsQuery } from './get-competitions.query';

@QueryHandler(GetCompetitionsQuery)
export class GetCompetitionsHandler implements IQueryHandler<GetCompetitionsQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ args: { where, orderBy, take, skip } }: GetCompetitionsQuery): Promise<any> {
    return this.prisma.competition.findMany({
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
