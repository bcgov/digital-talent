import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetCompetitionSkillsQuery } from './get-competition-skills.query';

@QueryHandler(GetCompetitionSkillsQuery)
export class GetCompetitionSkillsHandler implements IQueryHandler<GetCompetitionSkillsQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetCompetitionSkillsQuery): Promise<any> {
    return this.prisma.competitionSkill.findMany({
      where: {
        deleted_at: null,
        ...(query.args?.where && { ...query.args.where }),
      },
    });
  }
}
