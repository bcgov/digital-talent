import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetCompetitionQuery } from './get-competition.query';

@QueryHandler(GetCompetitionQuery)
export class GetCompetitionHandler implements IQueryHandler<GetCompetitionQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetCompetitionQuery): Promise<any> {
    return this.prisma.competition.findUniqueOrThrow({ where: { id: query.id } });
  }
}
